import React from "react";

const UnAuthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-red-600 text-center mb-4">
          Unauthorized Access
        </h1>
        <p className="text-center text-gray-700 mb-2">
          You do not have permission to view this page.
        </p>
        <p className="text-center text-gray-500 mb-6">
          Please log in with the appropriate credentials.
        </p>
        <div className="flex justify-center">
          <a
            href="/login"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Go to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnAuthorized;
