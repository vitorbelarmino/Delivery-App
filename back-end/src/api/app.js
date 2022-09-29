const express = require('express');
require('express-async-errors');
const cors = require('cors');
const { globalError } = require('../middleware/globalError');
const router = require('../routes/index');

const app = express();
app.use(express.json());
// app.use(cors());
app.use(router);
app.use('/images', express.static('public/images'));

app.use(globalError.handle);

module.exports = app;
