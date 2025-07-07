import React, { useRef } from "react";
import { RiAdminLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const Slidebar = () => {
  const arrowRef = useRef();

  const arrowClickHandle = () => {
    const sidebar = arrowRef.current;
    sidebar.classList.toggle("translate-x-0");
  };

  return (
    <div
      ref={arrowRef}
      className="fixed sm:relative transition-transform  -translate-x-58 sm:translate-x-0 w-60 min-w-60 bg-gradient-to-b to-blue-900 from-purple-900 text-white font-semibold h-screen z-10"
    >
      <span className="sm:hidden absolute -right-3 bg-purple-900 top-4 rounded-full p-2 outline-2 outline-amber-50">
        <FaArrowRight onClick={arrowClickHandle} />
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
            <span className="px-10 flex items-center gap-2 ">
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
            <span className="px-10 flex items-center gap-2">
              Manage Products <MdProductionQuantityLimits />
            </span>
          </NavLink>
          <NavLink
            className="font-semibold text-red-500 hover:underline"
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
