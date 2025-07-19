import React, { useRef, useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SiHelpdesk } from "react-icons/si";

const Slidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const arrowRef = useRef();

  const arrowClickHandle = () => {
    const sidebar = arrowRef.current;
    sidebar.classList.toggle("translate-x-0");
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={arrowRef}
      className="fixed lg:sticky top-[64px] self-start transition-transform  -translate-x-58 lg:translate-x-0 w-60 min-w-60 bg-gradient-to-b to-blue-900 from-purple-900 text-white font-semibold h-[calc(100vh-64px)] z-10 cursor-pointer"
    >
      <span
        onClick={arrowClickHandle}
        className="lg:hidden absolute -right-5 bg-purple-900 top-4 rounded-full p-2 outline-2 outline-amber-50"
      >
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </span>
      <div className="pt-5">
        <h2 className="text-2xl flex justify-center items-center">
          <span>Admin Panel</span>
          <span>
            <RiAdminLine />
          </span>
        </h2>
        <div className="flex gap-2 flex-col mt-5 font-normal">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r rounded text-green-500 font-bold from-[#ffffff65] "
                : "text-white"
            }
            to={"/admin/dashboard"}
          >
            <span className="px-10 hover:scale-104 flex items-center gap-2 ">
              Dashboard <RxDashboard />
            </span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r rounded text-green-500 font-bold from-[#ffffff65] "
                : "text-white"
            }
            to={"/admin/products"}
          >
            <span className="px-10 hover:scale-104 flex items-center gap-2">
              Manage Products <MdProductionQuantityLimits />
            </span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r rounded text-green-500 font-bold from-[#ffffff65] "
                : "text-white"
            }
            to={"/admin/query"}
          >
            <span className="px-10 hover:scale-104 flex items-center gap-2">
              Manage Query <SiHelpdesk />
            </span>
          </NavLink>
          <NavLink
            className="absolute bottom-10 text-xl font-semibold text-red-500 hover:underline"
            to={"/"}
          >
            <span className="px-10 flex items-center gap-2">
              Home <IoExitOutline />
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
