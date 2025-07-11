// create product controller

const productModel = require("../models/productModel");

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
};
