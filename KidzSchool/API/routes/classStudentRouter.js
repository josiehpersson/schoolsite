const express = require('express');
const classStudentsController = require('../controllers/classStudentsController');

const routes = () => {
const classStudentRouter = express.Router();
const controller = classStudentsController();
classStudentRouter.route('/classStudents')
 .get(controller.get);
classStudentRouter.route('/classStudents/:Id')
 .get(controller.get);
return classStudentRouter;
};



module.exports = routes;