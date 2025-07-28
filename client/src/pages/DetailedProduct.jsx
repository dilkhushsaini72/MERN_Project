import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/CartSlice";

const DetailedProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/single-productdata/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      const result = await response.json();
      setProduct(result.data);
      console.log(result);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg font-semibold text-blue-600 animate-pulse">
        Loading product details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row transition duration-300 ease-in-out hover:shadow-2xl">
        <img
          src={`/uploads/${product.productImg}`}
          alt={product.productName}
          className="w-full md:w-1/2 h-[400px] object-contain"
        />
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              {product.productName}
            </h1>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full mb-4">
              {product.productCat}
            </span>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              sapiente dolorem distinctio, quidem molestias ullam labore non
              exercitationem.
            </p>
            <div className="text-2xl font-bold text-green-600 mb-6 bg-green-100 px-4 py-2 rounded-lg w-fit shadow-sm">
              ₹{product.productPrice}
            </div>
          </div>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-4 w-full md:w-fit px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-medium shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
