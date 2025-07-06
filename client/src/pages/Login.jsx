import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative mx-4">
        <button
          onClick={() => navigate("/")}
          className="absolute right-3 top-3 hover:text-red-500 cursor-pointer font-extrabold"
        >
          X
        </button>
        <div>
          <h2 className="text-center text-2xl font-semibold">
            Login to continue..
          </h2>
        </div>
        <form className="flex flex-col">
          <label className="mt-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            className="outline-none border-b-2 border-gray-500 pb-1 focus:border-green-500"
          />
          <label htmlFor="password">Password</label>
          <div className="relative w-full">
            <input
              type={isShow ? "text" : "password"}
              name="password"
              id="pass"
              placeholder="********"
              className="relative w-full outline-none border-b-2 border-gray-500 pb-1 focus:border-green-500"
            />
            {!isShow ? (
              <IoEyeOutline
                onClick={() => setIsShow(!isShow)}
                className="absolute cursor-pointer hover:opacity-50 right-3 text-2xl top-0"
              />
            ) : (
              <IoEyeOffOutline
                onClick={() => setIsShow(!isShow)}
                className="absolute cursor-pointer hover:opacity-50 right-3 text-2xl top-0"
              />
            )}
          </div>
          <button className="bg-green-500 rounded-lg mt-6 py-1 font-bold text-white hover:bg-green-700 cursor-pointer">
            Login
          </button>
          <div className="flex text-sm justify-center pt-2">
            <p>Don't have an account- </p>
            <Link
              className="text-sky-400 font-bold hover:underline"
              to={"/registration"}
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
