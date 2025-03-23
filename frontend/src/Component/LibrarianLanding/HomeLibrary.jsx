import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function LibrarianDashboard() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-16 px-6">
        <p className="text-sm uppercase tracking-wide text-gray-600">
          FREE 30 DAYS TRIAL
        </p>
        <h2 className="text-5xl font-bold my-4">
          The best way to manage your library
        </h2>
        <p className="text-gray-600 max-w-2xl">
          Here you can add and manage libraries efficiently with our platform.
        </p>

        <div className="mt-6">
          <Link
            to="/add-library"
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg shadow-lg"
          >
            Add Library
          </Link>
        </div>
      </section>

      {/* Library/Book Images */}
      <div className="flex justify-center mt-12">
        <img
          src="https://source.unsplash.com/featured/?library,books"
          alt="Library"
          className="w-2/3 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
