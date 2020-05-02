const express = require('express');

const userController = require('./controllers/UserController.js');
const noteController = require('./controllers/NoteController.js');
const userNotesController = require('./controllers/UserNotesController.js');
const sessionController = require('./controllers/SessionController.js');

const routes = express.Router();

routes.post('/session', sessionController.create);

routes.get('/user', userController.index);
routes.post('/user', userController.create);

routes.get('/usernotes', userNotesController.index);

routes.get('/note', noteController.index);
routes.post('/note', noteController.create);
routes.put('/note/:cd_note', noteController.update);
routes.delete('/note/:cd_note', noteController.delete);

module.exports = routes;
