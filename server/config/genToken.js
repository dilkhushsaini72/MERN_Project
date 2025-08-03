const jwt = require("jsonwebtoken");
require("dotenv").config();

const genToken = async (userId) => {
  try {
    let token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {}
};

module.exports = genToken;
