'use strict';

//require('@google-cloud/debug-agent').start({ allowExpressions: true });

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendMessage = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        const mailOptions = { from: `"${req.body.contactName}" <${req.body.contactEmail}>`, to: 'marcosauda@outlook.com', subject: `Website Contact from: ${req.body.contactName}` };
        mailOptions.text = `Name: ${req.body.contactName}\nEmail: ${req.body.contactEmail}\nMessage: ${req.body.contactMessage}`;
        mailTransport.sendMail(mailOptions).then((info) => {
            mailTransport.close();
            res.status(200).end();
        }).catch((error) => {
            const httpRequest = httpRequest = {
                method: req.method,
                url: req.originalUrl,
                userAgent: req.get('user-agent'),
                referrer: 'sendMessage',
                remoteIp: req.ip
            };

            reportError(new Error(error), { httpRequest }).then(() => {
                mailTransport.close();
                res.status(500).end();
            });
        });
    });
});