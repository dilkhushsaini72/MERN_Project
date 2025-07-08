import React from "react";
import Slidebar from "./Slidebar";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex">
      <Slidebar />
      <div className="w-screen bg-amber-50 px-5">
        <h2 className="text-2xl mt-5 font-bold">Edit Product</h2>
        <button onClick={() => navigate("/admin/products")} className="bg-gray-200 px-4 py-2 font-bold mt-4 rounded hover:bg-gray-300 ">
          Back
        </button>
        <div className="max-w-2xl bg-white mx-auto p-4 rounded-sm shadow-lg">
          <form className="flex flex-col">
            <label className="my-2" htmlFor="">
              Product Name
            </label>
            <input
              className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
              type="text"
              placeholder="Product name"
            />
            <label className="my-2" htmlFor="">
              Price
            </label>
            <input
              className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
              type="number"
              name="price"
              id="price"
              placeholder="₹99"
            />
            <label className="my-2" htmlFor="">
              Category
            </label>
            <select
              className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
              name=""
              id=""
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
              name=""
              id=""
            >
              <option value="in-stock">In-Stock</option>
              <option value="out-of-stock">Out-OF-Stock</option>
              
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
