const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

// Registration controller
const regController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const User = new userModel({
      fullName: name,
      email: email,
      password: hashedPassword,
    });

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "Email already registered" });
    }

    await User.save();

    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server Error", error });
  }
};

// Login Controller
const loginController = async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

module.exports = {
  regController,
  loginController,
};
