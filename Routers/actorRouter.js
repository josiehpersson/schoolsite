const express = require('express');
const actorsController = require('../Controllers/actorsController');

const routes = () => {
const actorRouter = express.Router();
const controller = actorsController();
return actorRouter;
};

actorRouter.route('/actors')
 .get(controller.get);
actorRouter.route('/actors/:Id')
 .get(controller.get);


module.exports = routes;