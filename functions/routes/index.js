const functions = require('firebase-functions');
const admin = require('firebase-admin');
// Firebase Setup
// const serviceAccount = require('../marcosvrs-development-firebase-adminsdk-7paiv-6526b7cac4.json');
const serviceAccount = require('../marcosvrs-bc41d-firebase-adminsdk-cyrxy-99f51c4eae.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.GCLOUD_PROJECT}.firebaseio.com`
});
var express = require('express');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var router = express.Router();

var reportError = require('../errors');

// $ firebase functions:config:set gmail.email="myusername@gmail.com" gmail.password="secretpassword"
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/sendMessage', (req, res) => {
  var mailOptions = { from: `"${req.body.name}" <${req.body.email}>`, to: 'marcosauda@outlook.com', subject: `Website Contact from: ${req.body.name}` };
  mailOptions.text = `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`;

  mailTransport.sendMail(mailOptions).then((info) => {
    mailTransport.close();
    res.status(200).end();
  }).catch((error) => {
    const httpRequest = {
      method: req.method,
      url: req.originalUrl,
      userAgent: req.get('user-agent'),
      referrer: 'sendMessage',
      remoteIp: req.ip
    };
    return reportError(new Error(error), { httpRequest }).then(() => {
      mailTransport.close();
      res.status(error.status || 500).end();
    });
  });
});

//-------------------------------------------------------------------------------------------------------------------------------
const OAUTH_SCOPES = ['r_basicprofile', 'r_emailaddress'];

/**
 * Creates a configured LinkedIn API Client instance.
 */
function linkedInClient() {
  // LinkedIn OAuth 2 setup
  // $ firebase functions:config:set linkedin.client_id="yourClientID" linkedin.client_secret="yourClientSecret"
  return require('node-linkedin')(
    functions.config().linkedin.client_id,
    functions.config().linkedin.client_secret,
    `https://marcosvrs.com/`);
}

/**
 * Redirects the User to the LinkedIn authentication consent screen. ALso the 'state' cookie is set for later state
 * verification.
 */
function linkedInRedirect(req, res) {
  const Linkedin = linkedInClient();
  const state = req.cookies.state || crypto.randomBytes(20).toString('hex');
  console.log('Setting verification state:', state);
  res.cookie('state', state.toString(), { maxAge: 3600000, secure: true, httpOnly: true });
  Linkedin.auth.authorize(res, OAUTH_SCOPES, state.toString());
};

/**
 * Exchanges a given LinkedIn auth code passed in the 'code' URL query parameter for a Firebase auth token.
 * The request also needs to specify a 'state' query parameter which will be checked against the 'state' cookie.
 * The Firebase custom auth token is sent back in a JSONP callback function with function name defined by the
 * 'callback' query parameter.
 */
function linkedInToken(req, res) {
  const Linkedin = linkedInClient();

  try {
    if (!req.cookies.state) {
      throw new Error('State cookie not set or expired. Maybe you took too long to authorize. Please try again.');
    }
    console.log('Received verification state:', req.cookies.state);
    Linkedin.auth.authorize(OAUTH_SCOPES, req.cookies.state); // Makes sure the state parameter is set
    console.log('Received auth code:', req.query.code);
    console.log('Received state:', req.query.state);
    Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, (error, results) => {
      if (error) {
        throw error;
      }
      console.log('Received Access Token:', results.access_token);
      const linkedin = Linkedin.init(results.access_token);
      linkedin.people.me((error, userResults) => {
        if (error) {
          throw error;
        }
        console.log('Auth code exchange result received:', userResults);

        // We have a LinkedIn access token and the user identity now.
        const accessToken = results.access_token;
        const linkedInUserID = userResults.id;
        const profilePic = userResults.pictureUrl;
        const userName = userResults.formattedName;
        const email = userResults.emailAddress;

        // Create a Firebase account and get the Custom Auth Token.
        createFirebaseAccount(linkedInUserID, userName, profilePic, email, accessToken).then(
          firebaseToken => {
            // Serve an HTML page that signs the user in and updates the user profile.
            res.jsonp({ token: firebaseToken });
          });
      });
    });
  } catch (error) {
    return res.jsonp({ error: error.toString });
  }
};

/**
 * Creates a Firebase account with the given user profile and returns a custom auth token allowing
 * signing-in this account.
 * Also saves the accessToken to the datastore at /linkedInAccessToken/$uid
 *
 * @returns {Promise<string>} The Firebase custom auth token in a promise.
 */
function createFirebaseAccount(linkedinID, displayName, photoURL, email, accessToken) {
  // The UID we'll assign to the user.
  const uid = `linkedin:${linkedinID}`;

  // Save the access token tot he Firebase Realtime Database.
  const databaseTask = admin.database().ref(`/linkedInAccessToken/${uid}`)
    .set(accessToken);

  // Create or update the user account.
  const userCreationTask = admin.auth().updateUser(uid, {
    displayName: displayName,
    photoURL: photoURL,
    email: email,
    emailVerified: true
  }).catch(error => {
    // If user does not exists we create it.
    if (error.code === 'auth/user-not-found') {
      return admin.auth().createUser({
        uid: uid,
        displayName: displayName,
        photoURL: photoURL,
        email: email,
        emailVerified: true
      });
    }
    throw error;
  });

  // Wait for all async task to complete then generate and return a custom auth token.
  return Promise.all([userCreationTask, databaseTask]).then(() => {
    // Create a Firebase custom auth token.
    return admin.auth().createCustomToken(uid).then((token) => {
      console.log('Created Custom token for UID "', uid, '" Token:', token);
      return token;
    });
  });
}

router.post('linkedInRedirect', linkedInRedirect);
router.post('linkedInToken', linkedInToken);

//-------------------------------------------------------------------------------------------------------------------------------

module.exports = router;