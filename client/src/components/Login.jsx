import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const closeBtnHandle = () => {
    navigate("/");
  };
  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative mx-4">
        <button
          onClick={closeBtnHandle}
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            className="outline-none border-b-2 border-gray-500 pb-1 focus:border-green-500"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="pass"
            placeholder="********"
            className="outline-none border-b-2 border-gray-500 pb-1 focus:border-green-500"
          />
          <button className="bg-green-500 rounded-lg mt-6 py-1 font-bold text-white hover:bg-green-700 cursor-pointer">
            Login
          </button>
          <div className="text-center">
            <p>Don't have an account</p>
            <Link to>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
