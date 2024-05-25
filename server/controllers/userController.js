var User = require("../models/User");

//create user
const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
      error: error.message,
    });
  }
};
// get user
const getAllUser = async (req, res) => {
  try {
    const getAllUser = await User.find({});

    res.status(200).json({
      success: true,
      message: "Successfully get all users",
      data: getAllUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed. Try again",
    });
  }
};
// get user by id
const getUserById = async (req, res) => {
  const id = req.params.id;

  try {
    const getUserById = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully get User",
      data: getUserById,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to get User. Try again",
    });
  }
};
// update user
const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update. Try again",
    });
  }
};
// delete user
const deleteUserById = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteUserById = await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
      data: deleteUserById,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete. Try again",
    });
  }
};

module.exports = {
  createUser,
  getAllUser,
  deleteUserById,
  getUserById,
  updateUser,
};
