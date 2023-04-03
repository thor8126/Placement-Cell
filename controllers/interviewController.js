const Interview = require('../models/interview');

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
  res.redirect('/interviews/add-interview');
};



// Controller function for rendering List of Interviews page
module.exports.listInterviews = async function(req, res){
    const data = req.user;
    try{
        let interviews = await Interview.find({}).populate('students.studentId').lean();
        return res.render('ListofInterviews', {
            title: 'List of Interviews',
            interviews: interviews,
            data
        });
    }
    catch(err){
        console.log('Error in fetching interviews from db: ', err);
        return res.redirect('back');
    }
}
