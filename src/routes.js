const express = require('express');

const userController = require('./controllers/UserController.js');
const noteController = require('./controllers/NoteController.js');
const userNotesController = require('./controllers/UserNotesController.js');
const authController = require('./controllers/AuthController.js');

const routes = express.Router();

routes
    .post('/authenticate', authController.create)

    .get('/user', userController.index)
    .post('/user', userController.create)
    .put('/user/:cd_user', userController.updatePassword)
    .delete('/user/:cd_user', userController.delete)

    .get('/usernotes', userNotesController.index)

    .get('/note', noteController.index)
    .post('/note', noteController.create)
    .put('/note/:cd_note', noteController.update)
    .delete('/note/:cd_note', noteController.delete)

module.exports = routes;
