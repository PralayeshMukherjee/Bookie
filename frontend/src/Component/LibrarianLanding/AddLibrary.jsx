import React, { useEffect, useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import { User } from "../../index";

function AddLibrary() {
  const [sellerName, setSellerName] = useState(
    sessionStorage.getItem("userNameForSeller")
  );

  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    name: "",
    avgRating: "",
    libraryMailId: "",
    latitude: "",
    longitude: "",
    websiteLink: "",
    openingTime: "",
    closingTime: "",
    openDays: "",
    ph: "",
    username: "",
  });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const getBooks = async () => {
    try {
      const getAllBooksResponse = await fetch(
        "http://localhost:8080/books/getAllBooks"
      );
      const listData = await getAllBooksResponse.json();
      setBooks(listData);
      console.log(listData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddBook = async () => {
    if (newBook.title && newBook.price && newBook.stocks && newBook.author) {
      const response = await fetch("http://localhost:8080/library/addLibrary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });
      const data = await response.json();
      if (data.isAdded) {
        setNewBook({
          title: "",
          price: "",
          stocks: "",
          author: "",
        });
        alert("Book is added");
      } else {
        alert("Book not added");
      }
    }
  };

  const handleDeleteBook = async (id) => {
    const deleteResponse = await fetch(
      "http://localhost:8080/books/deleteBook",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    const deleteData = await deleteResponse.json();
    console.log(deleteData);

    if (deleteData.isDeleted) {
      setBooks((prev) => prev.filter((book) => book.id !== id));
      alert("Book deleted successfully");
    } else {
      alert("Book not deleted");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
      <div className="p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center bg-white dark:bg-gray-900 dark:text-white transition-all transform hover:scale-105 hover:shadow-2xl">
        <img
          src={User}
          alt="Seller Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-indigo-500 shadow-md dark:border-gray-400"
        />
        <h2 className="text-3xl font-bold mt-4">Hey, {sellerName}</h2>
        <p className="mt-2 text-lg">Book Seller | Trusted Partner</p>

        <div className="mt-6 grid gap-4">
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="number"
            step="0.1"
            placeholder="Average Rating"
            name="avgRating"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Library Mail ID"
            name="libraryMailId"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Latitude"
            name="latitude"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Longitude"
            name="longitude"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="url"
            placeholder="Website Link"
            name="websiteLink"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="time"
            placeholder="Opening Time"
            name="openingTime"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="time"
            placeholder="Closing Time"
            name="closingTime"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Open Days"
            name="openDays"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="ph"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Your Books</h3>
          <br />
          <button
            onClick={getBooks}
            className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg font-semibold h-10 w-50 shadow-lg cursor-pointer"
          >
            Show all Books
          </button>
          <ul className="mt-4 space-y-3">
            {books.map((book) => (
              <li
                key={book.id}
                className="flex justify-between items-center p-3 rounded-lg shadow-md border"
              >
                <span className="text-lg">
                  {book.title} -{" "}
                  <span className="font-semibold text-indigo-600">
                    {book.price}/-
                  </span>{" "}
                  by {book.author} | In Stock: {book.stocks}
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
      </div>
    </div>
  );
}

export default AddLibrary;
