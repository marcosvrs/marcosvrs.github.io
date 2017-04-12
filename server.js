(function () {
    'use strict';

    var path = require('path'),
        express = require('express'),
        app = express(),
        router = express.Router(),
        bodyParser = require('body-parser');

    app.locals.appTitle = 'marcosvrs';

    app.set('port', process.env.PORT || 80)
        .use(bodyParser.urlencoded({ extended: true }))
        .use(bodyParser.json())
        .use('/public', express.static(path.join(__dirname, 'public')))

        .use('/api', router)

        .get('*', function (req, res, next) {
            if (/.js|.html|.css/.test(req.path) || req.xhr) {
                return next({ status: 404, message: 'Not Found' });
            } else {
                res.sendFile(path.join(__dirname, 'index.html'));
            }
        });

    router.use(function (req, res, next) {

        /*
         * Middleware
         */

        next();
    })
        .get('/', function (req, res) {
            res.json({ message: 'hooray! welcome to our api!' });
        })
        .route('/message')
        .post(function (req, res) {

        });

    app.listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
})();