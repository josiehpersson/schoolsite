const express = require('express');
const customersController = require('../controllers/customersController');

const routes = () => {
const customerRouter = express.Router();
const controller = customersController();
customerRouter.route('/customers')
 .get(controller.get);
customerRouter.route('/customers/:Id')
 .get(controller.get);
return customerRouter;
};



module.exports = routes;