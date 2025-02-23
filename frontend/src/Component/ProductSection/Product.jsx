import React, { useEffect, useState, useCallback, useRef } from "react";

function Product() {
  const [selectedBooks, setSelectedBooks] = useState(
    () => sessionStorage.getItem("theQueryBook") || ""
  );
  const [dataFetch, setDataFetch] = useState([]);
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Store dark mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (selectedBooks) fetchData();
  }, [selectedBooks]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/fetchSellers/books?title=${selectedBooks}`
      );
      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();
      setDataFetch(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchSuggestions = useCallback(async () => {
    if (!query) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8080/search/books?query=${query}`
      );
      const data = await response.json();
      setSuggestions(data);
      setShowDropdown(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    const timer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timer);
  }, [query, fetchSuggestions]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            onClick={() => setDarkMode((prev) => !prev)}
            className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 shadow-lg"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full" ref={dropdownRef}>
          <input
            type="text"
            placeholder="Search for a book..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`w-full p-3 border rounded-full shadow-md focus:outline-none focus:ring-2 ${
              darkMode
                ? "focus:ring-blue-500 bg-gray-800 text-white"
                : "focus:ring-indigo-500 bg-white text-black"
            } transition-all`}
          />
          {showDropdown && (
            <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-50">
              {loading ? (
                <li className="px-4 py-2 text-gray-500">Loading...</li>
              ) : suggestions.length > 0 ? (
                suggestions.map((value, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                    onClick={() => {
                      setSelectedBooks(value);
                      sessionStorage.setItem("theQueryBook", value);
                      setShowDropdown(false);
                    }}
                  >
                    {value}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2  text-gray-500">No results found</li>
              )}
            </ul>
          )}
        </div>

        {/* Book List */}
        <h2
          className={`mt-6 text-2xl font-semibold text-center ${
            darkMode ? "text-blue-400" : "text-indigo-600"
          }`}
        >
          Search Results
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {dataFetch.length > 0 ? (
            dataFetch.map((book, index) => (
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
                <p className="text-gray-600 dark:text-gray-300">
                  by {book.author}
                </p>
                <p
                  className={`font-semibold ${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                >
                  {book.price}
                </p>
                <p className="text-yellow-500">In Stock: {book.stocks}</p>
                <p>Sellers: {book.username}</p>
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
            ))
          ) : (
            <h1 className=" text-center font-bold text-red-500">
              No books found.
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
