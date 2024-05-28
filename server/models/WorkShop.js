var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workshopSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    ticketQuantity: { type: Number, required: true },
    openDate: { type: Date, required: true },
    timeStart: { type: Date, required: true },
    timeEnd: { type: Date, required: true },
    location: { type: String, required: true },
    speakerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Speaker",
      required: true,
    },
    price: { type: Number, required: true },
    ticketSellQuantity: { type: Number, default: 0 },
    ticketSale: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const WorkShop = mongoose.model("WorkShop", workshopSchema);
module.exports = WorkShop;
