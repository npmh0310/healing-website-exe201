const WorkShop = require("../models/WorkShop");

// create new workshop
const createWorkShop = async (req, res) => {
  const newWorkShop = new WorkShop(req.body);
  try {
    const savedWorkShop = await newWorkShop.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedWorkShop,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to create. Try again",
        error: error.message,
      });
  }
};

module.exports = { createWorkShop };
