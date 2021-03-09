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
routes.get('/api/company/:id', controller.getCompany);
routes.get('/api/caretaker/:id', controller.getCaretaker);
routes.get('/api/companies', controller.getCompanies);
routes.get('/api/caretaker/:id/matches', controller.getMatches);
routes.get('/api/match/:matchId',controller.getMatch);
routes.get('/api/offer/matches',controller.getCandidates);
routes.get('/api/education:id', controller.getEducation);
routes.get('/api/experience:id', controller.getExperience);
routes.get('/api/caretaker/:id/education', controller.getAllEducation);
routes.get('/api/caretaker/:id/experience', controller.getAllExperience);
//*🔒 POST private petitions
routes.post('/api/offer/:id', controller.postOffer);
routes.post('/api/match/:offerId/:id', controller.postMatch);
routes.post('/api/caretaker/:id/education', controller.postEducation);
routes.post('/api/caretaker/:id/experience', controller.postExperience);
//*🔒 PUT private petitions
routes.put('/api/offer/:offerId', controller.putOffer);
routes.put('/api/match/:matchId', controller.putMatch);
routes.put('/api/education/:id', controller.putEducation);
routes.put('/api/experience/:id', controller.putExperience);
routes.put('/api/user/:id', controller.editAccount)
//*🔒 DELETE private petitions
routes.delete('/api/offer/:offerId', controller.deleteOffer);
routes.delete('/api/match/:matchId', controller.deleteMatch);
routes.delete('/api/education/:id', controller.deleteEducation);
routes.delete('/api/experience/:id', controller.deleteExperience);
routes.delete('/api/user/:id', controller.deleteAccount)
module.exports = routes;