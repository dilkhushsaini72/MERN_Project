import React, { useState } from "react";
import Slidebar from "./Slidebar";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    productCat: "",
    productImg: null,
  });

  const { productName, productPrice, productCat, productImg } = product;

  const productChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "productImg") {
      setProduct({ ...product, productImg: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const productSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productCat", productCat);
    formData.append("productImg", productImg);

    try {
      const response = await fetch("/api/create-product", {
        method: "POST",
        body: formData, // no headers for FormData
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        navigate("/admin/products");
      } else {
        toast.error(result.message || "Failed to add product");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex max-w-[1520px] mx-auto">
      <Slidebar />
      <div className="w-screen bg-amber-50 px-5">
        <h2 className="text-2xl mt-5 font-bold">Add Product</h2>
        <button
          onClick={() => navigate("/admin/products")}
          className="bg-gray-200 px-4 py-2 font-bold mt-4 rounded hover:bg-gray-300 "
        >
          Back
        </button>
        <div className="max-w-2xl bg-white mx-auto p-4 rounded-sm shadow-lg">
          <form onSubmit={productSubmit} className="flex flex-col">
            <label className="my-2" htmlFor="productName">
              Product Name
            </label>
            <input
              className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
              type="text"
              placeholder="Product name"
              name="productName"
              value={productName}
              onChange={productChange}
              required
            />
            <label className="my-2" htmlFor="productPrice">
              Price
            </label>
            <input
              className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
              type="number"
              name="productPrice"
              id="price"
              placeholder="₹99"
              value={productPrice}
              onChange={productChange}
              required
            />
            <label className="my-2" htmlFor="productCat">
              Category
            </label>
            <select
              className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
              name="productCat"
              value={productCat}
              onChange={productChange}
              required
            >
              <option value="">---select---</option>
              <option value="Cafe">Cafe</option>
              <option value="Home">Home</option>
              <option value="Toys">Toys</option>
              <option value="Fresh">Fresh</option>
              <option value="Electronics">Electronics</option>
              <option value="Mobile">Mobile</option>
              <option value="Beauty">Beauty</option>
            </select>
            <label className="my-2" htmlFor="productImg">
              Product Image
            </label>
            <input
              type="file"
              name="productImg"
              onChange={productChange}
              className="file:bg-gray-400 file:px-2 file:rounded file:my-1 file:font-semibold outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
              required
            />
            <div className="flex justify-end ">
              <button className="bg-purple-500 mt-5 py-1 px-2 rounded text-white font-bold hover:bg-purple-600 cursor-pointer">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
