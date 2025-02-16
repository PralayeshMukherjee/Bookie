import React, { useState } from "react";
import { Search, Clear } from "../../index";
import { useNavigate } from "react-router-dom";

const products = [
  "Mathematics by S.N.DAY",
  "Apple iPhone 15",
  "Samsung Galaxy S23",
  "OnePlus Nord 3",
  "MacBook Air M2",
  "Sony WH-1000XM5 Headphones",
  "Apple Watch Series 9",
  "Samsung Galaxy Tab S9",
  "Dell XPS 13",
  "Google Pixel 8",
  "Bose QuietComfort Earbuds",
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = products.filter((product) =>
        product.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Handle clicking a suggestion
  const handleSelect = (product) => {
    setQuery(product);
    setSelectedProduct(product);
    sessionStorage.setItem("title", product);
    setSuggestions([]);
    navigate("/Main/features/Sellers");
  };

  const clearInput = () => {
    setQuery("");
    setSuggestions([]);
    setSelectedProduct(null);
  };
  return (
    <div className="relative w-full max-w-lg mx-auto mt-10">
      {/* Search Input */}
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-lg transition focus-within:border-blue-500">
        <img src={Search} className="text-gray-500 mr-2 w-5 h-5" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full bg-transparent focus:outline-none"
          value={query}
          onChange={handleChange}
        />
        {query && (
          <button
            onClick={clearInput}
            className="text-gray-500 hover:text-red-500"
          >
            <img src={Clear} className="text-gray-500 mr-2 w-3 h-3" />
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded-lg mt-2 shadow-xl overflow-hidden max-h-52 overflow-y-auto">
          {suggestions.map((product, index) => (
            <li
              key={index}
              className="p-3 hover:bg-gray-100 cursor-pointer transition"
              onClick={() => handleSelect(product)}
            >
              {product}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
