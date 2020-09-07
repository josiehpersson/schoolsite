const express = require('express');
const contactsController = require('../controllers/contactsController');

const routes = () => {
const contactRouter = express.Router();
const controller = contactsController();
contactRouter.route('/contacts')
 .get(controller.get);
contactRouter.route('/contacts/:Id')
 .get(controller.get);
return contactRouter;
};



module.exports = routes;