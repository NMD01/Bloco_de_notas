const express = require('express');
const app = express();
require('dotenv').config();

app.use('/', (req, res) => {
  res.send('teste');
});

module.exports = app;
