import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../features/CartSlice";

const SearchItems = () => {
  const [searchData, setSearchData] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/single-productbyname/${id}`);
      const result = await response.json();
      setSearchData(result.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        Search Results for: <span className="text-blue-600">{id}</span>
      </h2>

      {searchData.length === 0 ? (
        <p className="text-red-500 text-center text-2xl font-medium">
          No Products Found!..
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchData.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow hover:shadow-lg transition-all p-4 flex flex-col"
            >
              <Link to={`/product/${product._id}`}>
                <img
                  src={`/uploads/${product.productImg}`}
                  alt={product.productName}
                  className="w-full h-48 object-contain rounded mb-4"
                />
                <h3 className="text-md font-medium mb-2">
                  {product.productName}
                </h3>
                <p className="text-lg font-bold text-green-700 mb-4">
                  ₹{product.productPrice}
                </p>
              </Link>
              <button
                className="mt-auto bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchItems;
