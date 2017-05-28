const functions = require('firebase-functions');

var app = require('./app');
exports.API = functions.https.onRequest(app);