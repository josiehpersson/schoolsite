const express = require('express');
const gendersController = require('../controllers/gendersController');

const routes = () => {
const genderRouter = express.Router();
const controller = gendersController();
genderRouter.route('/genders')
 .get(controller.get);
genderRouter.route('/genders/:Id')
 .get(controller.get);
return genderRouter;
};



module.exports = routes;