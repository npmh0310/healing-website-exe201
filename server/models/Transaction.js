const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
    paymentMethod: String,
    paymentStatus: String,
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
