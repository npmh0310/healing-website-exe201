const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: 'Account' },
  workshopID: { type: Schema.Types.ObjectId, ref: 'Workshop' },
  content: String
}, { timestamps: true });

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
