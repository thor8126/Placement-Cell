const flash = require('connect-flash');
const Interview = require('../models/interview');
const Student = require('../models/student');


exports.getInterviewForm = (req, res) => {
  res.render('Interview', { title: 'Interview' ,layout: 'base1',flash: req.flash()});
};

exports.addInterview = async (req, res) => {
  const { company, date } = req.body;
  const interview = new Interview({
    company,
    date
  });
  await interview.save();
  req.flash('success', 'Interview added successfully');
  res.redirect('/interviews/listinterviews');
};



// Controller function for rendering List of Interviews page
module.exports.listInterviews = async function(req, res){
    const data = req.user;
    try{
        let interviews = await Interview.find({}).populate('students.studentId').lean();
        return res.render('ListofInterviews', {
            title: 'List of Interviews',
            interviews: interviews,
            data,
            flash: req.flash()
        });
    }
    catch(err){
        console.log('Error in fetching interviews from db: ', err);
        return res.redirect('/');
    }
}

module.exports.assignPage = async function(req, res){
    const data = req.user;
    const studentId = req.body.studentId;
    try{
        let interviews = await Interview.find({}).lean();
        let student = await Student.findOne({studentId: studentId}).lean();
        return res.render('AssignPage', {
            title: 'Assign Page',
            interviews: interviews,
            data,
            student,
            flash: req.flash()
        });
    }
    catch(err){
        console.log('Error in fetching interviews from db: ', err);
        return res.redirect('/');
    }
} 

module.exports.assignStudent = async function(req, res){
    const studentId = req.body.studentId;
    const interviewId = req.body.interviewId;
    console.log(studentId, interviewId);
    try{
        const interview = await Interview.findById(interviewId);
        const student = await Student.findOne({studentId: studentId})
        interview.students.push(student);
        await interview.save();
        req.flash('success', 'Interview assigned to student successfully!');
        return res.redirect('/student/students');
    }
    catch(err){
        console.log('Error in assigning interview to student: ', err);
        req.flash('error', 'Error in assigning interview to student!');
        return res.redirect('/');
    }
}

module.exports.interviewPage = async function(req, res){
    try{
        const data = req.user;
        const interview = await Interview.findById(req.params.id).populate('students.studentId').lean();
        const students = await Student.find({ _id: { $in: interview.students } }).lean();
        return res.render('InterviewPage', {
            title: 'Interview Page',
            interview: interview,
            flash: req.flash(),
            data,
            students
        });
    }
    catch(err){
        console.log('Error in fetching interview from db: ', err);
        return res.redirect('/');
    }
}


module.exports.saveInterviewResult = async function(req, res){
    const studentId = req.body.studentId;
    const interviewId = req.body.interviewId;
    const resultStatus = req.body.resultStatus;

    try{
        const student = await Student.findOne({studentId: studentId});
        student.interviewStudentResult = resultStatus;
        await student.save();
        req.flash('success', 'Interview result saved successfully!');
        return res.redirect('/interviews/listinterviews');
    }
    catch(err){
        console.log('Error in saving interview result: ', err);
        req.flash('error', 'Error in saving interview result!');
        return res.redirect('/');
    }
}
