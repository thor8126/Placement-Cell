const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController');

router.get('/add-interview', interviewController.getInterviewForm);
router.post('/add', interviewController.addInterview);
router.get('/interviews', interviewController.listInterviews);

module.exports = router;
