const Student = require('../models/Student');


exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}


exports.addStudent = async (req, res) => {
    const { studentId, studentName, studentCollege, studentStatus, dsaFinalScore, webdFinalScore, reactFinalScore, interviewDate, interviewCompany, interviewStudentResult } = req.body;
    try {
        await Student.findOne({ studentId })
        .then(student => {
            if (student) {
                return res.status(400).json({ msg: 'Student already exists' });
            }
            const newStudent = new Student({
                studentId,
                studentName,
                studentCollege,
                studentStatus,
                dsaFinalScore,
                webdFinalScore,
                reactFinalScore,
                interviewDate,
                interviewCompany,
                interviewStudentResult
            });
            newStudent.save()
            .then(student => {
                res.json(student);
            })
            .catch(err => console.log(err));
        }
        )
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

