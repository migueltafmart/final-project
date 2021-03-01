//Local Modules
const controller = require('./controller');
//Downloaded Modules
const express = require('express'),
    routes = express.Router();

//GET public petitions
routes.get('/', controller.getUser);
//POST public petitions
routes.post('/', controller.signUp);
module.exports = routes;