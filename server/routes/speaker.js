// routes/speakerRoutes.js
const express = require("express");
const {
  createSpeaker,
  getAllSpeakers,
  getSingleSpeaker,
  updateSpeaker,
  deleteSpeaker,
} = require("../controllers/speakerController");
const { verifyAdmin } = require("../utils/verifyToken");

const speakerRoute = express.Router();

speakerRoute.post("/", verifyAdmin, createSpeaker);

speakerRoute.get("/", getAllSpeakers);

speakerRoute.get("/:id", getSingleSpeaker);

speakerRoute.put("/:id", verifyAdmin, updateSpeaker);

speakerRoute.delete("/:id", verifyAdmin, deleteSpeaker);

module.exports = speakerRoute;
