const express = require('express');
const studentsController = require('../controllers/studentsController');

const routes = () => {
const studentRouter = express.Router();
const controller = studentsController();
teacherRouter.route('/Students')
 .get(controller.get);
teacherRouter.route('/Students/:Id')
 .get(controller.get);
return studentRouter;
};



module.exports = routes;