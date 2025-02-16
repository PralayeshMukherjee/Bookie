import React, { useState } from "react";
import { FaTrash, FaPlus, FaSun, FaMoon } from "react-icons/fa";
import { User } from "../../index";

const SellerProfile = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", price: 20 },
    { id: 2, title: "1984", price: 15 },
  ]);
  const [newBook, setNewBook] = useState({ title: "", price: "" });

  const handleAddBook = () => {
    if (newBook.title && newBook.price) {
      setBooks([...books, { id: books.length + 1, ...newBook }]);
      setNewBook({ title: "", price: "" });
    }
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen p-6 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
      }`}
    >
      <div
        className={`p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center transform hover:scale-105 transition-all duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 p-2 bg-gray-300 dark:bg-gray-700 rounded-full hover:bg-gray-400 dark:hover:bg-gray-600 transition-all"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button>
        <img
          src={User}
          alt="Seller Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-indigo-500 shadow-md"
        />
        <h2 className="text-3xl font-bold mt-4">Seller Name</h2>
        <p className="mt-2 text-lg">Book Seller | Trusted Partner</p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Your Books</h3>
          <ul className="mt-4 space-y-3">
            {books.map((book) => (
              <li
                key={book.id}
                className="flex justify-between items-center p-3 rounded-lg shadow-md hover:border-1"
              >
                <span className="text-lg">
                  {book.title} -{" "}
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    ${book.price}
                  </span>
                </span>
                <button
                  onClick={() => handleDeleteBook(book.id)}
                  className="text-red-500 hover:text-red-700 text-xl"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={`mt-6`}>
          <h3 className="text-xl font-semibold">Add New Book</h3>
          <input
            type="text"
            placeholder="Book Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            className={`w-full p-3 border ${
              darkMode ? "placeholder-gray-400" : "placeholder-gray-600"
            } rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-400`}
          />
          <input
            type="number"
            placeholder="Price"
            value={newBook.price}
            onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
            className={`w-full p-3 border ${
              darkMode ? "placeholder-gray-400" : "placeholder-gray-600"
            } rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-400`}
          />
          <button
            onClick={handleAddBook}
            className="mt-4 px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-600 flex items-center gap-2 mx-auto text-lg font-semibold transition-all duration-300"
          >
            <FaPlus /> Add Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
