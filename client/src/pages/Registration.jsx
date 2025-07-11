import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const closeBtnHandle = () => {
    navigate("/");
  };

  const formSubmitHandle = async (data) => {
    const response = await fetch("/api/reg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      toast.success(result.message);
      navigate("/login");
    } else {
      toast.error(result.message);
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
        <form
          onSubmit={handleSubmit(formSubmitHandle)}
          className="flex flex-col"
        >
          <label className="mt-2" htmlFor="email">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className={`outline-none border-b-2 border-gray-500 pb-1 ${
              errors.name ? "border-red-500" : " focus:border-green-500"
            }`}
            {...register("name", {
              required: { value: true, message: "Please Enter your name*" },
            })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message} </p>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className={`outline-none border-b-2 border-gray-500 pb-1 ${
              errors.email ? "border-red-500" : " focus:border-green-500"
            }`}
            {...register("email", {
              required: { value: true, message: "Please Enter your email*" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            className={`outline-none border-b-2 border-gray-500 pb-1 ${
              errors.password ? "border-red-500" : " focus:border-green-500"
            }`}
            {...register("password", {
              required: { value: true, message: "Password is required*" },
              minLength: { value: 8, message: "Password should be 8 digits*" },
            })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
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
