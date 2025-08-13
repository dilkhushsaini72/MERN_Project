const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");
const adminAuth = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(403)
      .json({ message: "Access Denied: No Token Provided" });
  }

  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    if (user.role !== "admin") {
      return res.status(403).json({ message: "Access Denied: Not an Admin" });
    }
    req.user = decoded; // You can access this in next middleware or route
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = adminAuth;
