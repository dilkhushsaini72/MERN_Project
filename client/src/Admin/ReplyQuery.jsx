import React from "react";
import Slidebar from "./Slidebar";

const ReplyQuery = () => {
  return (
    <div className="flex max-w-[1520px] mx-auto">
      <Slidebar />
      <div className="w-screen bg-amber-50 px-5">
        <h2 className="text-2xl mt-5 ml-3 font-bold">Reply Query..🙋‍♀️</h2>
        <div className="max-w-2xl bg-white mx-auto p-4 rounded-sm shadow-lg">
          <form className="flex flex-col">
            <label className="my-2" htmlFor="receiver">
              Sending To:
            </label>
            <input
              className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
              type="text"
              placeholder="Email Address"
              name="receiver"
            />
            <label className="my-2" htmlFor="sender">
              Sending From:
            </label>
            <input
              className="outline-none border border-gray-300 focus:ring-2 ring-purple-400 rounded py-1 px-2"
              type="text"
              name="sender"
              placeholder="Email Address"
            />

            <div className="flex justify-end ">
              <button className="bg-purple-500 mt-5 py-1 px-2 rounded text-white font-bold hover:bg-purple-600 cursor-pointer">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReplyQuery;
