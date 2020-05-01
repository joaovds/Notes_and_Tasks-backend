const express = require('express');

const userController = require('./controllers/UserController.js');

const routes = express.Router();

routes.post('/user', userController.create);

module.exports = routes;
