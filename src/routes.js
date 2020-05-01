const express = require('express');

const userController = require('./controllers/UserController.js');

const routes = express.Router();

routes.get('/user', userController.index);
routes.post('/user', userController.create);

module.exports = routes;
