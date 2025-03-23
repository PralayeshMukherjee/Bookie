import React from "react";
import { Link } from "react-router-dom";

export default function HomeLibrary() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center px-6">
        <p className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-300 mt-20">
          FREE 30 DAYS TRIAL
        </p>
        <h2 className="text-5xl font-bold my-4 text-gray-900 dark:text-white">
          The best way to manage your library
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Here you can add and manage libraries efficiently with our platform.
        </p>

        <div className="mt-6">
          <Link
            to="/add-library"
            className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-md text-lg shadow-lg dark:shadow-white/10"
          >
            Add Library
          </Link>
        </div>
      </div>

      {/* Library/Book Images */}
      <div className="flex justify-center mt-12">
        <img
          src="https://source.unsplash.com/featured/?library,books"
          alt="Library"
          className="w-2/3 rounded-lg shadow-lg dark:shadow-gray-800"
        />
      </div>
    </div>
  );
}
