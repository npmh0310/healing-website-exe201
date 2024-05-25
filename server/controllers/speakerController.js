// controllers/speakerController.js
const Speaker = require("../models/Speaker");

// Tạo mới một Speaker
const createSpeaker = async (req, res) => {
  const newSpeaker = new Speaker(req.body);
  try {
    const savedSpeaker = await newSpeaker.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedSpeaker,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
      error: error.message,
    });
  }
};

// Cập nhật thông tin một Speaker dựa trên ID
const updateSpeaker = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedSpeaker = await Speaker.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedSpeaker,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to updated. Try again",
      error: error.message,
    });
  }
};

// Xóa một Speaker dựa trên ID
const deleteSpeaker = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedSpeaker = await Speaker.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
      data: deletedSpeaker,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete. Try again",
    });
  }
};

// Lấy thông tin một Speaker dựa trên ID
const getSingleSpeaker = async (req, res) => {
  const id = req.params.id;
  try {
    const speaker = await Speaker.findById(id);
    res.status(200).json({
      success: true,
      message: "Successfully get speaker",
      data: speaker,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "not found",
    });
  }
};

// Lấy tất cả các Speaker
const getAllSpeakers = async (req, res) => {
  try {
    const speakers = await Speaker.find({});
    res.status(200).json({
      success: true,
      count: speakers.length,
      message: "Successfully get all speakers",
      data: speakers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get all speakers",
    });
  }
};

module.exports = {
  createSpeaker,
  updateSpeaker,
  deleteSpeaker,
  getSingleSpeaker,
  getAllSpeakers,
};
