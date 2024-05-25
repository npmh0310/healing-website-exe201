const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" }],
    paymentMethod: { type: String, required: true },
    paymentStatus: { type: String, required: true },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
