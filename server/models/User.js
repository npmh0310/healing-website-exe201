const { Double } = require("mongodb");
var mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    name: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      default: "User",
    },
    address: String,
    phoneNumber: String,
    photo: String,
    faceId: String,
  },
  { timestamps: true }
);

var User = mongoose.model("User", userSchema);
module.exports = User;
