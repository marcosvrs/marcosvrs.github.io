const functions = require('firebase-functions');

const app = require('./app');
exports.API = functions.https.onRequest(app);