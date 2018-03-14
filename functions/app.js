const express = require('express');

const reportError = require('./errors');
const index = require('./routes/index');

const app = express();

app.use('/API', index);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  const httpRequest = {
    method: req.method,
    url: req.originalUrl,
    userAgent: req.get('user-agent'),
    referrer: 'sendMessage',
    remoteIp: req.ip
  };
  return reportError(new Error(err), { httpRequest }).then(() => {
    res.status(err.status || 500).end();
  });
});

module.exports = app;