var User = require("../models/User");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const profile = async (req, res) => {

  const id = req.user.id

  try {
    const getProfile = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully get profile",
      data: getProfile,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to get profile. Try again",
    });
  }
};

const register = async (req, res) => {
  try {
    //hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      // photo: req.body.photo,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
      error: err.message,
    });
  }
};

const login = async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });
    // check user exist
    if (!user) {
      return res.status(500).json({
        success: false,
        message: "User not found",
      });
    }

    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // sai pass
    if (!checkCorrectPassword) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }
    const { password, role, username, ...rest } = user._doc; // send to client (trwf password vs role)

    const token = jwt.sign(
      { id: user.id, role: user.role, email: email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // set token in cookies
    console.log("duoc khong ?")
    res
      .cookie("accessToken", token, {
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: "Successfully login",
        token: token,
        role: role,
        data: { ...rest },
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "fail to login",
      error: err.message,
    });
  }
};



module.exports = {
  register,
  login,
  profile,
};
