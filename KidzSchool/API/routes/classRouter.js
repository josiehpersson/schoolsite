const express = require('express');
const classesController = require('../controllers/classesController');

const routes = () => {
const classRouter = express.Router();
const controller = classesController();
teacherRouter.route('/Classes')
 .get(controller.get);
teacherRouter.route('/Classes/:Id')
 .get(controller.get);
return classRouter;
};



module.exports = routes;