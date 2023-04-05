// Student id, student name, student college, student status, DSA Final Score, WebD Final
// // Score, React Final Score, interview date, interview company, interview student result

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    idType:{
        type: String,
        enum: ['Aadhar', 'Pan', 'Passport'],
        required: true
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
        enum: ['Placed', 'Not_Placed'],
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
        type: Date
    },
    interviewCompany: {
        type: String
    },
    interviewStudentResult: {
        type: String,
        enum: ['PASS', 'FAIL', 'On Hold', 'Did not Attempt']
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;