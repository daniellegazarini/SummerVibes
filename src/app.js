const express = require('express');
const summerRouter = require('./routes/summerRouter');

const app = express();

app.use(express.json());
app.use('/summer', summerRouter);

module.exports = app;
