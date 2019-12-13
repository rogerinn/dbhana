'use strict'

const express = require('express');

const route = express.Router();

const index = require('./controller/IndexController')

route.get('/testedb', index.getDummy);

module.exports = route;