const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SeachController = require('./controllers/SearchControler');

const routes = Router();
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search',SeachController.index);

module.exports = routes;
