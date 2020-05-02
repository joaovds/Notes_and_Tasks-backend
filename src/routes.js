const express = require('express');

const userController = require('./controllers/UserController.js');
const noteController = require('./controllers/NoteController.js');
const userNotesController = require('./controllers/UserNotesController.js');
const sessionController = require('./controllers/SessionController.js');

const routes = express.Router();

routes
    .post('/session', sessionController.create)

    .get('/user', userController.index)
    .post('/user', userController.create)

    .get('/usernotes', userNotesController.index)

    .get('/note', noteController.index)
    .post('/note', noteController.create)
    .put('/note/:cd_note', noteController.update)
    .delete('/note/:cd_note', noteController.delete)

module.exports = routes;
