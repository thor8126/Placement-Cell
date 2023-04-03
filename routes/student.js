const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController.js');
const { check, validationResult } = require('express-validator');

const validate = [
    check('studentId').not().isEmpty().withMessage('Student ID is required'),
    check('studentName').not().isEmpty().withMessage('Student Name is required'),
    check('studentCollege').not().isEmpty().withMessage('Student College is required'),
    check('studentStatus').not().isEmpty().withMessage('Student Status is required'),
    check('dsaFinalScore').not().isEmpty().withMessage('DSA Final Score is required'),
    check('webdFinalScore').not().isEmpty().withMessage('WebD Final Score is required'),
    check('reactFinalScore').not().isEmpty().withMessage('React Final Score is required'),
];



router.get('/', studentController.getAllStudents);

router.post('/add-student',validate, studentController.addStudent);





module.exports = router;