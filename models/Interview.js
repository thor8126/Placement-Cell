const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
  company: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Student'
    }
  ]
});

module.exports = mongoose.model('Interview', interviewSchema);
