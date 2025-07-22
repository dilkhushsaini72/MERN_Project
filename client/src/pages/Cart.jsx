import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.Cart.cartItems);

  return (
    // Outer Overlay Container
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      {/* Inner Cart Box */}
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl relative mx-4 space-y-4">
        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute right-3 top-3 cursor-pointer text-gray-700 hover:text-red-600 text-xl font-bold"
        >
          X
        </button>

        {/* Cart Title */}
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Your Cart 🛒
        </h2>

        {/* Cart Items Section (scrollable) */}
        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
          {cartProducts.length > 0 ? (
            <div>
              {cartProducts.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center border-b pb-4 border-gray-200"
                >
                  {/* Product Image */}
                  <img
                    src={`/uploads/${item.productImg}`}
                    alt={item.productName}
                    className="w-16 h-16 object-cover rounded bg-gray-100"
                  />

                  {/* Product Info */}
                  <div className="flex-1 space-y-1">
                    <h3 className="text-sm font-semibold capitalize w-50 truncate text-gray-700">
                      {item.productName}
                    </h3>
                    <p className="text-xs text-gray-500">
                      ₹{item.productPrice} Each
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button className="px-2 py-1 font-extrabold bg-green-200 rounded hover:bg-green-400 text-sm">
                        <FaMinus />
                      </button>
                      <span className="text-sm font-medium">1</span>
                      <button className="px-2 py-1 font-extrabold bg-green-200 rounded hover:bg-green-400 text-sm">
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  {/* Item Price */}
                  <div className="text-sm font-semibold text-green-500">
                    ₹99
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="flex flex-col items-center">
              <span className="text-zinc-700 font-bold">Your Cart is Empty!</span>
              <Link className="bg-purple-500 px-2 py-1 my-4 rounded text-white font-semibold hover:bg-purple-700" to={"/"}>Continue Shoping</Link>
            </p>
          )}
        </div>

        {/* Total and Checkout */}
        <div className="pt-4 border-t border-gray-200 space-y-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>₹396</span>
          </div>
          <button className="w-full bg-green-400 hover:bg-green-600 text-white py-2 rounded-md transition cursor-pointer">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
