const express = require('express');
const prefixesController = require('../controllers/prefixesController');

const routes = () => {
const prefixRouter = express.Router();
const controller = prefixesController();
prefixRouter.route('/Prefixes')
 .get(controller.get);
prefixRouter.route('/Prefixes/:Id')
 .get(controller.get);
return prefixRouter;
};



module.exports = routes;