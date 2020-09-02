const express = require('express');
const teachersController = require('../Controllers/teachersController');

const routes = () => {
const teacherRouter = express.Router();
const controller = teachersController();
teacherRouter.route('/TeacherId')
 .get(controller.get);
teacherRouter.route('/TeacherId/:Id')
 .get(controller.get);
return teacherRouter;
};



module.exports = routes;