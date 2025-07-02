import React from "react";
import logo from "../assets/Quickzy.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="max-w-[1480px] mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand + Description */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img src={logo} alt="footer_icon" className="w-28 mb-4" />
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            rerum.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <Link to={"/"} className="hover:text-green-600 transition">Home</Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-green-600 transition">About</Link>
            </li>
            <li>
              <Link to={"/contact"} className="hover:text-green-600 transition">Contact</Link>
            </li>
            <li>
              <Link to={"/terms&cond"} className="hover:text-green-600 transition">T&C</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            <Link className="hover:text-blue-800 transition">
              <FaFacebook />
            </Link>
            <Link className="hover:text-pink-500 transition">
              <FaInstagram />
            </Link>
            <Link className="hover:text-sky-500 transition">
              <FaTwitter />
            </Link>
            <Link className="hover:text-green-600 transition">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="text-center text-xs text-white py-4 border-t border-zinc-400">
        © {new Date().getFullYear()} Quickzy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
