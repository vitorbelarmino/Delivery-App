const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorMiddleware = require ('../middleware/middlewareError');


const app = express();
app.use(express.json());
app.use(cors());
app.use(errorMiddleware);

app.get('/coffee', (_req, res) => res.status(418).send("ok"));

module.exports = app;
