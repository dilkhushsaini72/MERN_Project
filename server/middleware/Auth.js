const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied: No Token Provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    req.user = decoded; // You can access this in next middleware or route
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};
module.exports = authMiddleware;
