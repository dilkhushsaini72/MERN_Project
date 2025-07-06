import React from "react";
import product_Img from "../assets/Quickzy.png";

const Products = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Trending Products 🔥</h2>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <div
            key={index}
            className="border border-zinc-200 rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product_Img}
              alt="Product"
              className="w-full h-40 object-contain mb-3"
            />
            <div className="text-lg font-medium mb-1">Item {index + 1}</div>
            <div className="text-green-600 font-semibold mb-2">₹99</div>
            <button className="w-full bg-purple-600 py-2 text-white rounded hover:bg-purple-700 transition cursor-pointer">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
