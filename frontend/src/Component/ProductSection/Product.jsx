import React, { useEffect, useState } from "react";

function Product() {
  const selectedBook = sessionStorage.getItem("selectedBook");
  const [dataFetch, setDataFetch] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    console.log("fetching");
    fetchData();
  }, [selectedBook]);
  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:8080/fetchSellers/books?title=${selectedBook}`
    );
    const data = await response.json();
    console.log(data);
    setDataFetch(data);
  };
  return (
    <div
      className={`min-h-screen p-6 transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1
            className={`text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${
              darkMode
                ? "from-blue-400 to-purple-500"
                : "from-indigo-500 to-pink-500"
            }`}
          >
            Book Search
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-full transition-all text-white bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 shadow-lg"
          >
            {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for a book..."
          // value={query}
          // onChange={(e) => handleSearch(e.target.value)}
          className={`w-full p-3 border rounded-full shadow-md focus:outline-none focus:ring-2 ${
            darkMode
              ? "focus:ring-blue-500 bg-gray-800 text-white"
              : "focus:ring-indigo-500 bg-white text-black"
          } transition-all`}
        />

        {/* Book List */}
        <h2
          className={`mt-6 text-2xl font-semibold text-center ${
            darkMode ? "text-blue-400" : "text-indigo-600"
          }`}
        >
          Search Results
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {dataFetch.map((book, index) => (
            <div
              key={index}
              className={`flex flex-col border p-5 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl ${
                darkMode
                  ? "bg-gray-800 text-white border-gray-700"
                  : "bg-white text-black border-gray-300"
              } relative overflow-hidden`}
            >
              <h3
                className={`text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r ${
                  darkMode
                    ? "from-blue-400 to-purple-400"
                    : "from-indigo-500 to-pink-500"
                }`}
              >
                {book.title}
              </h3>
              <p
                className={`text-gray-600 ${
                  darkMode ? "dark:text-gray-300" : "text-gray-700"
                }`}
              >
                by {book.author}
              </p>
              <p
                className={`font-semibold ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                {book.price}
              </p>
              <p className="text-yellow-500">⭐ {book.rating}</p>
              <button
                className={`mt-2 px-4 py-2 rounded-full transition-all ${
                  darkMode
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-indigo-500 hover:bg-indigo-600 text-white"
                }`}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;

// [
//   {
//       "id": 1,
//       "title": "Java By Raj",
//       "price": 650,
//       "author": "Raj Mukherjee",
//       "stocks": "13",
//       "username": "raj"
//   }
// ]
