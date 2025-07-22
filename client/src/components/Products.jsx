import React, { useEffect, useState } from "react";
import product_Img from "../assets/Quickzy.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";

const Products = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await fetch("/api/show-trending");
      const result = await response.json();

      setProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Trending Products 🔥</h2>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {product.map((item, index) => (
          <div
            key={item._id}
            className="border border-zinc-200 rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={`/uploads/${item.productImg}`}
              alt="Product"
              className="w-full h-40 object-contain mb-3"
            />
            <div className="capitalize text-lg font-medium mb-1">
              {item.productName}
            </div>
            <div className="text-green-600 font-semibold mb-2">
              ₹{item.productPrice}
            </div>
            <button
              onClick={() => dispatch(addToCart(item))}
              className="w-full bg-purple-600 py-2 text-white rounded hover:bg-purple-700 transition cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
