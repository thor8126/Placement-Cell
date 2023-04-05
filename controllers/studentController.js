const flash = require('connect-flash');
const Interview = require('../models/interview');
const Student = require('../models/student');

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}


exports.addStudent = async (req, res) => {
    const {studentId,idType, studentName, studentCollege, studentStatus, dsaFinalScore, webdFinalScore, reactFinalScore} = req.body;
    try {
        await Student.findOne({ studentId })
        .then(student => {
            if (student) {
                req.flash('error', 'Student already exists');
                res.redirect('/add_student');
            }
            const newStudent = new Student({
                studentId,
                idType,
                studentName,
                studentCollege,
                studentStatus,
                dsaFinalScore,
                webdFinalScore,
                reactFinalScore,
            });
            newStudent.save()
            .then(student => {
                req.flash('success', 'Student added successfully');
                res.redirect('/add_student')
            })
            .catch(err => console.log(err));
        }
        )
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}


// Controller function for rendering List of Students page
module.exports.studentList = async function(req, res){
    const data = req.user;
    try{
        let students = await Student.find({}).lean();
        return res.render('ListofStudents', {
            title: 'List of Students',
            students: students,
            data,
            flash: req.flash()
        });
    }
    catch(err){
        console.log('Error in fetching students from db: ', err);
        return res.redirect('back');
    }
}


