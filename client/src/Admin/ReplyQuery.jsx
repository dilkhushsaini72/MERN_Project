import React, { useEffect, useState } from "react";
import Slidebar from "./Slidebar";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ReplyQuery = () => {
  const [replyForm, setReplyForm] = useState({
    To: "",
    From: "sender@email.com",
    Sub: "",
    Body: "",
    query: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/single-query/${id}`);
      const result = await response.json();
      const { email, query } = result.data;

      setReplyForm((prev) => ({
        ...prev,
        To: email,
        query: query,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReplyForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/reply-query}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(replyForm),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message);
        navigate("/admin/query");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-[1520px] mx-auto min-h-screen">
      <div className="w-full lg:w-[250px]">
        <Slidebar />
      </div>

      <div className="flex-1 bg-amber-50 px-4 sm:px-6 md:px-10 py-6">
        <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
          Reply Query..🙋‍♀️
        </h2>

        <button
          onClick={() => navigate("/admin/query")}
          className="bg-gray-200 px-4 py-2 font-bold rounded hover:bg-gray-300 mb-4"
        >
          Back
        </button>

        {/* Query Section */}
        <div className="bg-white rounded shadow px-4 py-3 mb-6">
          <p className="text-xl font-extrabold text-center mb-2">
            Query in detail..
          </p>
          <hr className="border-zinc-300 mb-2" />
          <p className="text-zinc-800 font-semibold text-justify">
            {replyForm.query}
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded shadow-lg p-4">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <div>
              <label htmlFor="To" className="block font-medium mb-1">
                Sending To:
              </label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                type="text"
                name="To"
                value={replyForm.To}
                readOnly
              />
            </div>

            <div>
              <label htmlFor="From" className="block font-medium mb-1">
                Sending From:
              </label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                type="text"
                name="From"
                value={replyForm.From}
                readOnly
              />
            </div>

            <div>
              <label htmlFor="Sub" className="block font-medium mb-1">
                Subject:
              </label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                type="text"
                name="Sub"
                value={replyForm.Sub}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="Body" className="block font-medium mb-1">
                Body:
              </label>
              <textarea
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                name="Body"
                rows={5}
                value={replyForm.Body}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-purple-500 py-2 px-6 rounded text-white font-bold hover:bg-purple-600"
              >
                Reply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReplyQuery;
