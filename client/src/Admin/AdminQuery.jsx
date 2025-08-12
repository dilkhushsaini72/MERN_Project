import React, { useEffect, useState } from "react";
import Slidebar from "./Slidebar";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AdminQuery = () => {
  const [queryData, setQueryData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/show-query");
      const result = await response.json();
      setQueryData(result.data);
      if (response.status === 401) {
        window.location.href = "/unknown"; // Redirect to login if unauthorized
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete it?");
    if (!confirm) return;

    try {
      const response = await fetch("/api/delete-query", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        fetchData();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <Slidebar />
      <div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center md:text-left">
          Query Management 📧
        </h1>

        <div className="w-full overflow-x-auto rounded-lg shadow">
          {queryData.length ? (
            <table className="min-w-[600px] w-full text-sm text-left text-gray-700 bg-white">
              <thead className="text-xs sm:text-sm text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="px-2 sm:px-4 py-3">S.No</th>
                  <th className="px-2 sm:px-4 py-3">User Name</th>
                  <th className="px-2 sm:px-4 py-3">Query</th>
                  <th className="px-2 sm:px-4 py-3">Email-ID</th>
                  <th className="px-2 sm:px-4 py-3">Status</th>
                  <th className="px-2 sm:px-4 py-3">Reply</th>
                  <th className="px-2 sm:px-4 py-3">Delete</th>
                </tr>
              </thead>
              <tbody>
                {queryData.map((item, idx) => (
                  <tr key={item._id} className="border-b hover:bg-gray-50">
                    <td className="px-2 sm:px-4 py-2">{idx + 1}</td>
                    <td className="px-2 sm:px-4 py-2">{item.name}</td>
                    <td className="px-2 sm:px-4 py-2 max-w-[100px] truncate">
                      {item.query}
                    </td>

                    <td className="px-2 sm:px-4 py-2 max-w-[100px] truncate">
                      {item.email}
                    </td>
                    <td className="px-2 sm:px-4 py-2">
                      <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded">
                        {item.queryStatus}
                      </span>
                    </td>
                    <td className="px-2 sm:px-4 py-2">
                      <Link to={`/admin/reply-query/${item._id}`}>
                        <button className="text-xs bg-green-600 hover:bg-green-700 text-white font-semibold px-3 py-1 rounded">
                          Reply
                        </button>
                      </Link>
                    </td>
                    <td className="px-2 sm:px-4 py-2">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-xs bg-red-500 hover:bg-red-600 font-semibold text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500 text-sm sm:text-base font-medium py-4">
              There is no query...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminQuery;
