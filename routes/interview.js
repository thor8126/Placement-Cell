const express = require('express');
const router = express.Router();

const interviewController = require('../controllers/interviewController');

router.get('/add-interview', interviewController.getInterviewForm);
router.post('/add', interviewController.addInterview);
router.get('/listinterviews', interviewController.listInterviews);
router.post('/assign' , interviewController.assignPage);
router.post('/assignStudent', interviewController.assignStudent);

module.exports = router;
