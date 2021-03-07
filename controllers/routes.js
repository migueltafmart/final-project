//Local Modules
const controller = require('./controller');
//Downloaded Modules
const express = require('express'),
    routes = express.Router();

//*GET public petitions
routes.get('/api/offers/:companyId?', controller.getOffers);
routes.get('/api/offer/:offerId', controller.getOffer);
//*POST public petitions
routes.post('/api/signup', controller.signUp);
routes.post('/api/login', controller.logIn);

//*🔒 GET private petitions
routes.get('/api/user/:id', controller.getUser);
//*🔒 POST private petitions
routes.post('/api/offer/:companyId', controller.postOffer);
//*🔒 PUT private petitions
routes.put('/api/offer/:offerId', controller.putOffer)
//*🔒 DELETE private petitions
routes.delete('/api/offer/:offerId', controller.deleteOffer);
module.exports = routes;