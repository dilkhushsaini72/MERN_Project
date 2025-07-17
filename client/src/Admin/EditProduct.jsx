import React, { useEffect, useState } from "react";
import Slidebar from "./Slidebar";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const EditProduct = () => {
  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    productCat: "",
    productStatus: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const fetchSingleData = async () => {
    try {
      const response = await fetch(`/api/getsingleproduct/${id}`);
      const result = await response.json();

      setProductData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const { productName, productPrice, productCat, productStatus } = productData;

  useEffect(() => {
    fetchSingleData();
  }, []);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/update-product`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    const result = await response.json();

    if (response.ok) {
      toast.success(result.message);
      navigate("/admin/products");
    }
  };

  return (
    <div className="flex max-w-[1520px] mx-auto">
      <Slidebar />
      <div className="w-screen bg-amber-50 px-5">
        <h2 className="text-2xl mt-5 font-bold">Edit Product</h2>
        <button
          onClick={() => navigate("/admin/products")}
          className="bg-gray-200 px-4 py-2 font-bold mt-4 rounded hover:bg-gray-300 "
        >
          Back
        </button>
        <div className="max-w-2xl bg-white mx-auto p-4 rounded-sm shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="my-2" htmlFor="">
              Product Name
            </label>
            <input
              className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
              type="text"
              placeholder="Product name"
              name="productName"
              value={productName}
              onChange={handleChange}
            />
            <label className="my-2" htmlFor="">
              Price
            </label>
            <input
              className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
              type="number"
              id="price"
              placeholder="₹99"
              name="productPrice"
              value={productPrice}
              onChange={handleChange}
            />
            <label className="my-2" htmlFor="">
              Category
            </label>
            <select
              className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
              name="productCat"
              value={productCat}
              onChange={handleChange}
            >
              <option value="">---select---</option>
              <option value="Cafe">Cafe</option>
              <option value="Home">Home</option>
              <option value="Toys">Toys</option>
              <option value="Fresh">Fresh</option>
              <option value="Electronics">Electronics</option>
              <option value="Mobile">Mobile</option>
              <option value="Bueaty">Bueaty</option>
            </select>
            <label className="my-2" htmlFor="">
              Stock
            </label>
            <select
              className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
              name="productStatus"
              value={productStatus}
              onChange={handleChange}
            >
              <option value="out-of-stock">Out-OF-Stock</option>
              <option value="In-stock">In-Stock</option>
            </select>
            <label className="my-2" htmlFor="img">
              Prodcut Image
            </label>
            <input
              type="file"
              className="file:bg-gray-400 file:px-2 file:rounded file:my-1 file:font-semibold outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
              name="img"
              id="img"
            />
            <div className="flex justify-end ">
              <button className="bg-purple-500 mt-5 py-1 px-2 rounded text-white font-bold hover:bg-purple-600 cursor-pointer">
                Edit Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
