const express = require('express');
require('express-async-errors');
const cors = require('cors');
const { globalError } = require('../middleware/globalError');
const loginRouter = require('../routes/login.router');
const registerRouter = require('../routes/register.router');
const productsRouter = require('../routes/products.router');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/customer/products', productsRouter);

app.use(globalError.handle);

module.exports = app;
