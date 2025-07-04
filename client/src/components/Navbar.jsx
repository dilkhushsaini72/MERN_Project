import React from "react";
import logo from "../assets/Quickzy.png";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-t bg-white to-green-100 shadow-md sticky top-0 z-50">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="w-20 sm:w-20">
          <Link to={"/"}>
            <img src={logo} alt="LOGO" className="w-full h-auto" />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="flex gap-6 items-center text-sm sm:text-base font-medium">
          <Link to={"/login"}>
            <MdAccountCircle className="text-2xl text-green-400 hover:text-green-500 cursor-pointer" />
          </Link>
          <Link to={"/cart"} className="relative cursor-pointer">
            <span className="absolute -top-2.5 -right-[-7px] text-xs font-bold text-purple-600">
              {"0"}
            </span>
            <FaShoppingCart className="text-2xl text-zinc-700 hover:text-zinc-900" />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
