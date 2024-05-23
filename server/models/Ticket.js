const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  workshopID: { type: Schema.Types.ObjectId, ref: 'Workshop' },
  checkInStatus: {
    type: String,
    default: "none"
  },
  accountID: { type: Schema.Types.ObjectId, ref: 'Account' }
}, { timestamps: true });

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
