const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController.js');



router.get('/', studentController.getAllStudents);

router.post('/add-student', studentController.addStudent);





module.exports = router;