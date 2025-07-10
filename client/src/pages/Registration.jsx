import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const registration = () => {
  const [regData, setRegData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const inputChange = (e) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  };

  const closeBtnHandle = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = regData;

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      toast.error("All fields are required!");
    } else {
      const response = await fetch("/api/reg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        navigate("/login")
        setRegData({ name: "", email: "", password: "" });
      } else {
        toast.error(result.message);
      }

    }
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
            Register New User..
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mt-2" htmlFor="email">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={regData.name}
            placeholder="John Doe"
            className="outline-none border-b-2 border-gray-500 pb-1 focus:border-green-500"
            onChange={inputChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={regData.email}
            placeholder="example@gmail.com"
            className="outline-none border-b-2 border-gray-500 pb-1 focus:border-green-500"
            onChange={inputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={regData.password}
            placeholder="********"
            className="outline-none border-b-2 border-gray-500 pb-1 focus:border-green-500"
            onChange={inputChange}
          />
          <button className="bg-green-500 rounded-lg mt-6 py-1 font-bold text-white hover:bg-green-700 cursor-pointer">
            Register
          </button>
          <div className="flex text-sm justify-center pt-2">
            <p>Already have an account-</p>
            <Link
              className="text-sky-400 font-bold hover:underline"
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default registration;
