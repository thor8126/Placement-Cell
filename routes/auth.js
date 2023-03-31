const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController.js');


router.post('/signup', usersController.register);

router.post('/login', usersController.login);
  
router.get('/logout', usersController.logout);



module.exports = router;