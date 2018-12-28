const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.code = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.json({
    code: err.code || 500,
    message: err.message,
  });
});

module.exports = app;