import React from "react";
import Slidebar from "./Slidebar";
import { FaPlusSquare, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const AdminProducts = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch("/api/show-product");
      const result = await response.json();

      setProductData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    const response = await fetch(`/api/delete-product/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    });

    const result = await response.json();

    if (response.ok) {
      toast.success(result.message);
      fetchData();
    }
  };

  const updateProduct = async (id) => {
    try {
      const response = await fetch(`/api/update-product/:${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      });
    } catch (error) {}

    navigate("/admin/edit-product");
  };

  return (
    <div className="flex max-w-[1520px] mx-auto">
      <Slidebar />
      <div className="w-screen bg-amber-50 px-5">
        <h2 className="text-2xl mt-5 font-bold">Manage Products 📊</h2>
        <button className="bg-green-500 hover:bg-green-600 cursor-pointer px-3 py-2 font-bold text-white rounded mt-3 flex  items-center gap-3">
          <span>
            <FaPlusSquare />
          </span>
          <span onClick={() => navigate("/admin/add-product")}>
            Add Products
          </span>
        </button>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {productData.map((item, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 hover:shadow-lg rounded bg-white p-4 "
            >
              <div className="h-50">
                <img className="border h-full" src="ka" alt="products img" />
              </div>
              <h2 className="text-xl capitalize font-semibold">
                {item.productName}
              </h2>
              <div className="text-zinc-600 ">{item.productCat}</div>
              <div className="text-2xl font-bold text-green-500">
                ₹{item.productPrice}
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => updateProduct(item._id)}
                  title="Edit"
                  className="group-hover:block relative  cursor-pointer hover:scale-120 text-sky-400"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteProduct(item._id)}
                  title="Delete"
                  className=" cursor-pointer scale-105 hover:scale-120 text-red-500"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
