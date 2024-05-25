var mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
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
