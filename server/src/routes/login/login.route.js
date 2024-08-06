const express = require('express');
const { CheckEmail, CheckPassword } = require('../../controllers/login.controller');
  
const LoginRouter = express.Router();

LoginRouter.post('/verifyemail',CheckEmail);
LoginRouter.post('/verifypassword',CheckPassword);

module.exports = LoginRouter;