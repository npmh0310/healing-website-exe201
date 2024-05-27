var jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token && token === null) {
    return res.status(401).json({
      success: false,
      message: "You're not authorized",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return
    }
    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res.next, () => {
    // console.log(req.user.role)
    if (
      req.user.id === req.params.id ||
      req.user.role === "Admin" ||
      req.user.role === "User"
    ) {
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "You're not authenticated",
      });
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res.next, () => {
    if (req.user.role === "Admin") {
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "You're not authorize",
      });
    }
  });
};

module.exports = {
  verifyToken,
  verifyUser,
  verifyAdmin,
};
