import React from "react";
import logo from "../assets/Quickzy.png";
import { Link, NavLink } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [isShowLinks, setIsShowLinks] = useState(false);

  const toggleHandle = () => {
    setIsShowLinks(!isShowLinks);
  };

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
        <ul className="hidden md:flex gap-6 items-center text-sm sm:text-base font-medium">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-orange-400 text-green-700"
                  : "hover:text-green-600"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-orange-400 text-green-700"
                  : "hover:text-green-600"
              }
              to={"/blog"}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-orange-400 text-green-700"
                  : "hover:text-green-600"
              }
              to={"/login"}
            >
              Login
            </NavLink>
          </li>
          <li>
            <MdAccountCircle className="text-2xl text-green-400 hover:text-green-500 cursor-pointer" />
          </li>
          <li className="relative cursor-pointer">
            <span className="absolute -top-2.5 -right-[-7px] text-xs font-bold text-purple-600">
              {"0"}
            </span>
            <FaShoppingCart className="text-2xl text-zinc-700 hover:text-zinc-900" />
          </li>
        </ul>

        {/* Mobile Icons + Toggle Button */}
        <div className="flex md:hidden items-center gap-4">
          <MdAccountCircle className="text-2xl text-green-400 hover:text-green-500 cursor-pointer" />
          <div className="relative cursor-pointer">
            <span className="absolute -top-2.5 -right-[-7px] text-xs font-bold text-purple-600">
              {"0"}
            </span>
            <FaShoppingCart className="text-2xl text-zinc-700 hover:text-zinc-900" />
          </div>
          {/* Toggle Button */}
          <button
            onClick={toggleHandle}
            className="text-2xl cursor-pointer text-zinc-700 hover:text-zinc-900"
          >
            {isShowLinks ? <RxCross2 /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu (hidden by default) */}
      {isShowLinks && (
        <div className="md:hidden bg-amber-50 absolute right-5 mt-2 py-5 px-8 rounded-lg shadow-lg pb-4">
          <ul className="flex flex-col gap-3 text-base font-medium">
            <li>
              <NavLink
                to="/"
                className="block text-green-700 hover:text-green-600"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="block text-green-700 hover:text-green-600"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="block text-green-700 hover:text-green-600"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
