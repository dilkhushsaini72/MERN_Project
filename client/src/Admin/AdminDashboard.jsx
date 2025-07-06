import React from "react";
import Slidebar from "./Slidebar";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Slidebar />
      <div className="w-screen bg-amber-50 px-5">
        <h2 className="text-2xl mt-5 ml-3 font-bold">Admin Dashboard 📊</h2>
        <div className="bg-white p-5 rounded-xl shadow-lg mt-5 w-full">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <span className="font-bold text-2xl text-green-500">32</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
