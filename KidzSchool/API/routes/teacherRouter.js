const express = require('express');
const teachersController = require('../controllers/teachersController');

const routes = () => {
const teacherRouter = express.Router();
const controller = teachersController();
teacherRouter.route('/Teachers')
 .get(controller.get);
teacherRouter.route('/Teachers/:Id')
 .get(controller.get);
return teacherRouter;
};



module.exports = routes;