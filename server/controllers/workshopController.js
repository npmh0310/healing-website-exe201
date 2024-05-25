const WorkShop = require("../models/WorkShop");
const Speaker = require("../models/Speaker");
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
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
      error: error.message,
    });
  }
};

//update workshop
const updateWorkShop = async (req, res) => {
  const id = req.params.id;
  try {
    const updateWorkShop = await WorkShop.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateWorkShop,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to updated. Try again",
      error: error.message,
    });
  }
};

// delete ws
const deleteWorkShop = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteWorkShop = await WorkShop.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
      data: deleteWorkShop,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete. Try again",
    });
  }
};

// get 1 workshop
const getSingleWorkShop = async (req, res) => {
  const id = req.params.id;
  try {
    const getWorkShopById = await WorkShop.findById(id).populate('speakerId', 'name bio photo phoneNumber');
    res.status(200).json({
      success: true,
      message: "Successfully get work shop",
      data: getWorkShopById,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "not found",
    });
  }
};
// get all ws
const getAllWorkShop = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);

  try {
    const getAllWorkShop = await WorkShop.find({})
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      count: getAllWorkShop.length,
      message: "Successfully getAllWorkShop",
      data: getAllWorkShop,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "not found",
    });
  }
};

const getWorkShopBySearch = async (req, res) => {
  const name = new RegExp(req.query.name, "i"); // Tạo biểu thức chính quy không phân biệt chữ hoa chữ thường
  try {
    const workShops = await WorkShop.find({ name: { $regex: name } }); // Sử dụng $regex để tìm kiếm khớp với chuỗi con
    res.status(200).json({
      success: true,
      message: "Successfully",
      data: workShops,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed, Try again",
    });
  }
};

module.exports = getWorkShopBySearch;

module.exports = {
  createWorkShop,
  updateWorkShop,
  deleteWorkShop,
  getSingleWorkShop,
  getAllWorkShop,
  getWorkShopBySearch,
};
