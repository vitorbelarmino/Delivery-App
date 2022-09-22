const express = require('express');
require('express-async-errors');
const cors = require('cors');
// const errorMiddleware = require('../middleware/middlewareError');
const { globalError } = require('../middleware/globalError');
const authRouter = require('../routes/login.router');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/login', authRouter);
app.use(globalError.handle);
// app.use(errorMiddleware);

module.exports = app;
