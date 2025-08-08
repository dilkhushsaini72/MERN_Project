const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: String,
      required: true,
    },
    productCat: {
      type: String,
      required: true,
    },
    productImg: {
      type: String,
      required: true,
    },
    productStatus: {
      type: String,
      default: "Out-of-stock",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
