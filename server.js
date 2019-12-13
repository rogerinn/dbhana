'use strict'
require('dotenv').config()

const express = require('express');
const cors = require('cors');

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./src/routes'));

app.listen(port);