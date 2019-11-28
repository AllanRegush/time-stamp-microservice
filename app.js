const express = require('express');
const routes = require('./routes/index')
const path = require('path');
const cors = require('cors');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors({optionSuccessStatus: 200}))

app.use('/', routes);

module.exports = app;