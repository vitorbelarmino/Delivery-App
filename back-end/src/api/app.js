const express = require('express');
require('express-async-errors');
const cors = require('cors');
const { globalError } = require('../middleware/globalError');
const authRouter = require('../routes/login.router');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/login', authRouter);
app.use(globalError.handle);

module.exports = app;
