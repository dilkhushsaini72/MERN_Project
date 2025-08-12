import React, { useEffect, useState } from "react";
import Slidebar from "./Slidebar";

const AdminDashboard = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/show-product");
      const result = await response.json();

      setProductData(result.data);

      if (response.status === 401) {
        window.location.href = "/unknown"; // Redirect to login if unauthorized
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex max-w-[1520px] mx-auto">
      <Slidebar />
      <div className="w-screen bg-amber-50 px-5">
        <h2 className="text-2xl mt-5 ml-3 font-bold">Admin Dashboard 📊</h2>
        <div className="bg-white p-5 rounded-xl shadow-lg mt-5 w-full">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <span className="font-bold text-2xl text-green-500">
            {productData.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
