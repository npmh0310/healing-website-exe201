var express = require("express");
const {
  createWorkShop,
  updateWorkShop,
  deleteWorkShop,
  getSingleWorkShop,
  getAllWorkShop,
  getWorkShopBySearch,
} = require("../controllers/workshopController");
const { verifyUser, verifyAdmin } = require('../utils/verifyToken');

const router = express.Router();

//create new tours
router.post("/",verifyAdmin, createWorkShop);
// update ws
router.put("/:id", verifyAdmin, updateWorkShop);
// delete ws
router.delete("/:id",verifyAdmin, deleteWorkShop);
// getSingle ws
router.get("/:id", getSingleWorkShop);
// get ws by search
router.get("/search/getWorkShopSearch", getWorkShopBySearch);
// getAll ws
router.get("/", getAllWorkShop);

module.exports = router;
