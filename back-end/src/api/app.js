const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorMiddleware = require ('../middleware/middlewareError');
const authRouter = require('../routes/auth.router');


const app = express();
app.use(express.json());
app.use(cors());
app.use('/login', authRouter);
app.use(errorMiddleware);

module.exports = app;
