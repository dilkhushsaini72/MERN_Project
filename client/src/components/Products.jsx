import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, syncCartWithBackend } from "../features/CartSlice";
import Category from "./Category";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const [catData, setCatData] = useState("All");
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const url =
        catData === "All" || !catData
          ? "/api/show-trending"
          : `/api/show-trending/${catData}`; // /show-trending/:cat
      const response = await fetch(url);
      const result = await response.json();
      setProduct(result.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [catData]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(syncCartWithBackend(item)); // Sync with backend
  };

  return (
    <div className="p-5">
      <Category onCategoryChange={(name) => setCatData(name)} />
      <h2 className="text-2xl font-bold mb-4">Products 🔥</h2>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {product.map((item) => (
          <div
            key={item._id}
            className="border border-zinc-200 rounded-lg p-4 shadow hover:shadow-lg transition"
            // onClick={() => navigate(`/product/${item._id}`)}
          >
            <Link to={`/product/${item._id}`}>
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
            </Link>
            <button
              onClick={() => handleAddToCart(item)}
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
