import React from "react";
import Slidebar from "./Slidebar";
import { FaPlusSquare, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 hover:shadow-lg rounded bg-white p-4 "
            >
              <div className="h-50">
                <img className="border h-full" src="ka" alt="products img" />
              </div>
              <h2 className="text-2xl font-semibold">Product name</h2>
              <div className="text-zinc-600 ">Category Name</div>
              <div className="text-2xl font-bold text-green-500">₹99</div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => navigate("/admin/edit-product")}
                  title="Edit"
                  className="group-hover:block relative  cursor-pointer hover:scale-120 text-sky-400"
                >
                  <FaEdit />
                </button>
                <button
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
