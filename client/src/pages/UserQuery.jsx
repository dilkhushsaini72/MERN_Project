import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserQuery = () => {
  const [userQuery, setUserQuery] = useState({
    name: "",
    email: "",
    query: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserQuery({ ...userQuery, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/userquery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userQuery),
    });

    const result = await response.json();
    if (response.ok) {
      toast.success(result.message);
      navigate("/");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="mb-5">
      <h2 className="text-green-400 text-2xl text-center py-4 font-bold">
        Query Form
      </h2>
      <div className="border border-zinc-200 shadow-lg rounded-xl max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="p-5 flex flex-col">
          <label className="my-2" htmlFor="">
            Your Name
          </label>
          <input
            placeholder="John Doe"
            type="text"
            className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
            name="name"
            value={userQuery.name}
            onChange={handleChange}
            required
          />
          <label className="my-2" htmlFor="">
            Email
          </label>
          <input
            placeholder="example@gmail.com"
            type="email"
            className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
            name="email"
            value={userQuery.email}
            onChange={handleChange}
            required
          />
          <label className="my-2" htmlFor="">
            Your Query..
          </label>
          <textarea
            className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
            name="query"
            value={userQuery.query}
            onChange={handleChange}
            required
          ></textarea>
          <button className="bg-green-500 rounded-lg mt-6 py-1 font-bold text-white hover:bg-green-700 cursor-pointer">
            Submit Query
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserQuery;
