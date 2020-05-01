const express = require('express');

const userController = require('./controllers/UserController.js');
const noteController = require('./controllers/NoteController.js');
const userNotesController = require('./controllers/UserNotesController.js');

const routes = express.Router();

routes.get('/user', userController.index);
routes.post('/user', userController.create);

routes.get('/usernotes', userNotesController.index);

routes.get('/note', noteController.index);
routes.post('/note', noteController.create);
routes.delete('/note/:cd_note', noteController.delete);

module.exports = routes;
