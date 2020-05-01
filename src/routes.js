const express = require('express');

const userController = require('./controllers/UserController.js');
const noteController = require('./controllers/NoteController.js');

const routes = express.Router();

routes.get('/user', userController.index);
routes.post('/user', userController.create);

routes.post('/note', noteController.create);

module.exports = routes;
