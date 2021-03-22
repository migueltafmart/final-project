//Local Modules
const controller = require('./controller');
const claims = require('./claims');
//Downloaded Modules
const express = require('express'),
    routes = express.Router();

//*GET public petitions
routes.get('/api', controller.docs);
routes.get('/api/logo', controller.logo);
routes.get('/api/offers/:id?', controller.getOffers);
routes.get('/api/offer/:offerId', controller.getOffer);
//*POST public petitions
routes.post('/api/login', controller.logIn);

//*🔒 GET private petitions
routes.get('/api/user/:id', claims.claims, controller.getUser);
routes.get('/api/company/:id', claims.claims, controller.getCompany);
routes.get('/api/caretaker/:id', claims.claims, controller.getCaretaker);
routes.get('/api/companies', claims.claims, controller.getCompanies);
routes.get('/api/caretaker/:id/matches', claims.claims, controller.getMatches);
routes.get('/api/match/:matchId', claims.claims, controller.getMatch);
routes.get('/api/offer/:id/matches', claims.company, controller.getCandidates);
routes.get('/api/education/:id', claims.claims, controller.getEducation);
routes.get('/api/experience/:id', claims.claims, controller.getExperience);
routes.get('/api/caretaker/:id/education', claims.claims, controller.getAllEducation);
routes.get('/api/caretaker/:id/experience', claims.claims, controller.getAllExperience);
//*🔒 POST private petitions
routes.post('/api/signup', claims.admin, controller.signUp);
routes.post('/api/offer/:id', claims.company, controller.postOffer);
routes.post('/api/match/:offerId/:id', claims.caretaker, controller.postMatch);
routes.post('/api/caretaker/:id/education', claims.caretaker, controller.postEducation);
routes.post('/api/caretaker/:id/experience', claims.caretaker, controller.postExperience);
//*🔒 PUT private petitions
routes.put('/api/offer/:offerId', claims.company, controller.putOffer);
routes.put('/api/match/:matchId', claims.company, controller.putMatch);
routes.put('/api/education/:id', claims.caretaker, controller.putEducation);
routes.put('/api/experience/:id', claims.caretaker, controller.putExperience);
routes.put('/api/user/:id', claims.claims, controller.editAccount)
//*🔒 DELETE private petitions
routes.delete('/api/offer/:offerId', claims.company, controller.deleteOffer);
routes.delete('/api/match/:matchId', claims.claims, controller.deleteMatch);
routes.delete('/api/education/:id', claims.caretaker, controller.deleteEducation);
routes.delete('/api/experience/:id', claims.caretaker, controller.deleteExperience);
routes.delete('/api/user/:id', claims.claims, controller.deleteAccount)
module.exports = routes;