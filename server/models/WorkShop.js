var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workshopSchema = new Schema({
  name: String,
  description: {
    type: String,
    unique: true
  },
  image: String,
  ticketQuantity: Number,
  openDate: Date,
  timeStart: Date,
  timeEnd: Date,
  location: String,
  speakerId: Schema.Types.ObjectId,
  price: Number,
  ticketSellQuantity: Number
}, { timestamps: true });

const WorkShop = mongoose.model('WorkShop', workshopSchema);
module.exports = WorkShop;
