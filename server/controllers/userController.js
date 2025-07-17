const productModel = require("../models/productModel");
const queryModel = require("../models/queryModel");
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
    const { email, password } = req.body;

    const checkUser = await userModel.findOne({ email });
    if (!checkUser) {
      return res.status(400).send({ message: "Email not found *" });
    }

    const checkPassword = await bcrypt.compare(password, checkUser.password);
    if (!checkPassword) {
      return res.status(401).send({ message: "Incorrect password" });
    }

    res.status(200).send({ message: "Login successfully", data: checkUser });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

// Get Trending Product controller
const showTrendingController = async (req, res) => {
  try {
    const Product = await productModel.find({ productStatus: "In-stock" });
    res.status(200).send({ data: Product });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

// user Query controller

const userQueryController = async (req, res) => {
  try {
    const { name, email, query } = req.body;
    const userQuer = new queryModel({
      name,
      email,
      query,
    });

    await userQuer.save();

    res.status(201).send({ message: "Your Query Submitted.." });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

module.exports = {
  regController,
  loginController,
  showTrendingController,
  userQueryController,
};
