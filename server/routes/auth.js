var express = require('express');
const { login, register, profile } = require('../controllers/authController');
const { verifyUser } = require('../utils/verifyToken');

const authRoute = express.Router();

authRoute.post("/login", login);
authRoute.post("/register", register);
authRoute.get("/profile", verifyUser, profile);
// authRoute.get("/logout", logout)

module.exports = authRoute;