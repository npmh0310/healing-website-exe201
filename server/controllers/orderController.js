const Order = require("../models/Order");

// create new workshop
const createOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
      error: error.message,
    });
  }
};

module.exports = {
  createOrder,
};
