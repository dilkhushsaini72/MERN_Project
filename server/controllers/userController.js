const genToken = require("../config/genToken");
const productModel = require("../models/productModel");
const queryModel = require("../models/queryModel");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();

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

    const token = await genToken(User._id);

    await User.save();

    res.cookie("token", token);
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

    const token = await genToken(checkUser._id);

    res.cookie("token", token, {
      httpOnly: false, // Allow JS to access the cookie
      secure: false,
      sameSite: "Lax", // or "Strict"
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

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

// Show products on Category

const showProductOnCat = async (req, res) => {
  try {
    const Category = req.params.cat;

    const Products = await productModel.find({
      productCat: Category,
      productStatus: "In-stock",
    });
    res.status(200).send({ data: Products });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

// show single product controller

const showSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const Product = await productModel.findById(id);
    res.status(200).send({ data: Product });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

// show single product by name
const showSingleProductByName = async (req, res) => {
  try {
    const { id } = req.params;

    const Product = await productModel.find({
      productName: { $regex: id, $options: "i" },
    });
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

// Cart items controller
const cartItemsController = async (req, res) => {
  try {
    const cartData = req.body;
    const userId = req.user._id;
    const user = await userModel.findById(userId);
    user.cartItems = cartData;
    await user.save();
    res.status(200).send({
      message: "Cart items updated successfully",
      data: user.cartItems,
    });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

// Show cart items controller
const showCartItemsController = async (req, res) => {
  try {
    const userId = req.user._id; // Use _id from JWT
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ data: user.cartItems });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

module.exports = {
  regController,
  loginController,
  showTrendingController,
  showSingleProduct,
  showSingleProductByName,
  userQueryController,
  showProductOnCat,
  cartItemsController,
  showCartItemsController,
};
