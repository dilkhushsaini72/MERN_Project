// create product controller

const productModel = require("../models/productModel");
const queryModel = require("../models/queryModel");
const nodemailer = require("nodemailer");

const createProduct = async (req, res) => {
  try {
    const { productName, productPrice, productCat } = req.body;
    const Product = new productModel({
      productName,
      productPrice,
      productCat,
    });

    await Product.save();

    res.status(201).send({ message: "Product Created successfully.." });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

// Show all product controller
const showProduct = async (req, res) => {
  try {
    const Products = await productModel.find();

    res
      .status(200)
      .send({ data: Products, message: "products received successfully." });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

// Delete product Controller

const deleteProduct = async (req, res) => {
  try {
    const Id = req.params.id;

    const Product = await productModel.findByIdAndDelete(Id);
    res.status(200).send({ message: "product deleted😋", data: Product });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

// Get single Product Data
const getsingleproduct = async (req, res) => {
  try {
    const Id = req.params.id;

    const Product = await productModel.findById(Id);
    res.status(200).send({ message: "Successfully received", data: Product });
  } catch (error) {}
};

// Update products controller
const updateProduct = async (req, res) => {
  try {
    const { _id } = req.body;
    const Product = req.body;

    res.status(200).send({ message: "Product Updated Successfully" });

    await productModel.findByIdAndUpdate(_id, Product);
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

// Show query on Admin panel

const showQueryController = async (req, res) => {
  try {
    const Queries = await queryModel.find();
    res.status(200).send({ data: Queries });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

// Delete Query controller
const deleteQueryController = async (req, res) => {
  try {
    const Id = req.body.id;

    await queryModel.findByIdAndDelete(Id);
    res.status(200).send({ message: "Query Deleted.." });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

// Show single query controller
const getSingleQuery = async (req, res) => {
  try {
    const Id = req.params.id;
    await queryModel.findByIdAndUpdate(Id, { queryStatus: "Read" });
    const Query = await queryModel.findById(Id);
    res.status(200).send({ data: Query });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

// Reply query Controller

const replyQueryController = async (req, res) => {
  try {
    const { To, Sub, Body } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "sainidilkhush019@gmail.com",
        pass: "wnygvpcucpraifxl",
      },
    });

    const info = transporter.sendMail({
      from: '"Quizy.com" <sainidilkhush019@gmail.com>',
      to: To,
      subject: Sub,
      text: Body,
      html: Body,
    });

    res.status(200).send({ message: "Reply Sent!!" });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error });
  }
};

module.exports = {
  createProduct,
  showProduct,
  deleteProduct,
  updateProduct,
  getsingleproduct,
  showQueryController,
  deleteQueryController,
  getSingleQuery,
  replyQueryController,
};
