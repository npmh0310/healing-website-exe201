var express = require("express");
const { createWorkShop } = require("../controllers/workshopController");



const router = express.Router()

//create new tours
router.post('/', createWorkShop)

module.exports = router