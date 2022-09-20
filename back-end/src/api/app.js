const express = require('express');
require('express-async-errors');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).send("ok"));

module.exports = app;
