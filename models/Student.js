// Student id, student name, student college, student status, DSA Final Score, WebD Final
// // Score, React Final Score, interview date, interview company, interview student result

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true, 
        unique: true
    },
    studentName: {
        type: String,
        required: true
    },
    studentCollege: {
        type: String,
        required: true
    },
    studentStatus: {
        type: String,
        required: true
    },
    dsaFinalScore: {
        type: Number,
        required: true
    },
    webdFinalScore: {
        type: Number,
        required: true
    },
    reactFinalScore: {
        type: Number,
        required: true
    },
    interviewDate: {
        type: Date,
        required: true
    },
    interviewCompany: {
        type: String,
        required: true
    },
    interviewStudentResult: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;