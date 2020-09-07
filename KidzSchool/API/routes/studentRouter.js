const express = require('express');
const studentsController = require('../controllers/studentsController');

const routes = () => {
const studentRouter = express.Router();
const controller = studentsController();
studentRouter.route('/Students')
 .get(controller.get);
studentRouter.route('/Students/:Id')
 .get(controller.get);
return studentRouter;
};



module.exports = routes;