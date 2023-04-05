const express = require('express');
const router = express.Router();

const interviewController = require('../controllers/interviewController');

router.get('/add-interview', interviewController.getInterviewForm);
router.post('/add', interviewController.addInterview);
router.get('/listinterviews', interviewController.listInterviews);
router.post('/assign' , interviewController.assignPage);
router.post('/assignStudent', interviewController.assignStudent);
router.get('/interview/:id', interviewController.interviewPage);
router.post('/interview/saveResult', interviewController.saveInterviewResult);
module.exports = router;
