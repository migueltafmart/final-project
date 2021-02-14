//Local Modules
const controller = require('./controller');
//Downloaded Modules
const express = require('express'),
    routes = express.Router();

//GET public petitions
routes.get('/', controller.getHome)
//POST public petitions
routes.post('/', controller.postHome)
// PUT public petitions
routes.put('/', controller.putHome)
// DELETE public petitions
routes.delete('/', controller.deleteHome)

module.exports = routes;