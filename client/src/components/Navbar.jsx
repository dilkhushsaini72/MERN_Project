import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle, MdLogout, MdContactSupport } from "react-icons/md";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import logo from "../assets/Quickzy.png";

const Navbar = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.Cart.cartItems);

  // Check token on initial render
  const token = Cookies.get("token");
  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  // Search form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchItem.trim() !== "") {
      navigate(`/search/${searchItem.trim()}`);
      setSearchItem("");
    }
  };

  // Logout handler
  const handleLogout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const fetchCartItems = async () => {
    try {
      const response = await fetch("/api/show-cart-items", {
        credentials: "include",
      });
      const result = await response.json();
      setCartItems(result.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [cartItems]);

  return (
    <nav className="bg-gradient-to-t bg-white to-green-100 shadow-md sticky top-0 z-50">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="w-20">
          <Link to={"/"}>
            <img src={logo} alt="LOGO" className="w-full h-auto" />
          </Link>
        </div>

        {/* Search */}
        <form onSubmit={handleSubmit} className="relative w-full h-7 mx-10">
          <input
            type="search"
            placeholder="Search Items.."
            className="outline-none px-2 w-full rounded-sm h-full bg-zinc-50 border border-zinc-200"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-[-20px] top-0 text-sm h-full bg-black flex items-center justify-center p-1 rounded-r text-white cursor-pointer"
          >
            <FaSearch />
          </button>
        </form>

        {/* Right Nav */}
        <ul className="flex gap-6 items-center text-sm sm:text-base font-medium">
          {/* Show Logout or Login Icon */}
          {isLoggedIn ? (
            <MdLogout
              onClick={handleLogout}
              className="text-2xl text-green-400 hover:text-green-500 cursor-pointer"
              title="Logout"
            />
          ) : (
            <Link to={"/login"} title="Login">
              <MdAccountCircle className="text-2xl text-green-400 hover:text-green-500 cursor-pointer" />
            </Link>
          )}

          {/* Cart Icon */}
          <Link to={"/cart"} className="relative cursor-pointer" title="Cart">
            <span className="absolute -top-2.5 -right-[-7px] text-xs font-bold text-purple-600">
              {cartItems ? cartItems.length : 0}
            </span>
            <FaShoppingCart className="text-2xl text-zinc-700 hover:text-zinc-900" />
          </Link>
        </ul>
      </div>

      {/* Support Icon */}
      <Link to={"/query"}>
        <span className="fixed bottom-10 right-10 text-green-500 hover:text-green-600 transition-all hover:scale-125 cursor-pointer">
          <MdContactSupport size={40} />
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
