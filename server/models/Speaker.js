const mongoose = require("mongoose");

const speakerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: { type: String },
    photo: { type: String },
    phoneNumber: { type: String },
  },
  { timestamps: true }
);

const Speaker = mongoose.model("Speaker", speakerSchema);
module.exports = Speaker;
