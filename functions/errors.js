function reportError(err, context = {}) {
  const metadata = process;
  const errorEvent = {
    err,
    context
  };

  return new Promise((resolve, reject) => {
    console.info(metadata);
    console.error(errorEvent);
    console.error(err.stack);
    resolve();
  });
}

module.exports = reportError;