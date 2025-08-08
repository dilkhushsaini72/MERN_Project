const jwt = require("jsonwebtoken");
require("dotenv").config();

const genToken = async (_id) => {
  try {
    let token = jwt.sign({ _id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {}
};

module.exports = genToken;
