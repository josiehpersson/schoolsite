const express = require('express');
const cartsController = require('../controllers/cartsController');

const routes = () => {
const cartRouter = express.Router();
const controller = cartsController();
cartRouter.route('/carts')
 .get(controller.get);
cartRouter.route('/carts/:Id')
 .get(controller.get);
return cartRouter;
};



module.exports = routes;