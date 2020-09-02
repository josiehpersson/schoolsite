const express = require('express');
const cartsController = require('../controllers/cartsController');

const routes = () => {
const cartRouter = express.Router();
const controller = cartsController();
cartRouter.route('/cart')
 .get(controller.get);
cartRouter.route('/cart/:Id')
 .get(controller.get);
return cartRouter;
};



module.exports = routes;