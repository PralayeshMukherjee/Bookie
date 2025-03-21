import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function LibrarianRegister() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-400 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-center text-cyan-600 dark:text-cyan-400 mb-4">
          • Registration Form •
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Country"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              name="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-600 dark:text-gray-400"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <button className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 dark:hover:bg-cyan-700 transition">
            CREATE ACCOUNT
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Already have an account?{" "}
          <Link
            to={"/LibraryLoginPage"}
            className="text-cyan-500 hover:underline dark:text-cyan-400"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
