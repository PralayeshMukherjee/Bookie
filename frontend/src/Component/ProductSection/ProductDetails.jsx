import React, { use, useEffect, useState } from "react";

function ProductDetails() {
  const [darkMode, setDarkMode] = useState(false);
  let book = sessionStorage.getItem("bookDetails");
  console.log(book);
  const [bookDetails, setBookDetails] = useState("");
  useEffect(() => {
    if (book) {
      setBookDetails(book);
    }
  }, []);
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
  return (
    <div
      className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
    >
      <div className="max-w-6xl mx-auto p-6 shadow-lg rounded-lg flex">
        <div className="w-2/3 p-4">
          <h1 className="text-3xl font-bold">Book Title</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Author: Author Name
          </p>
          <p className="text-2xl font-semibold text-green-600 mt-2">$9.99</p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Special Offer: 10% off on first purchase
          </p>

          <div className="mt-6">
            <h2 className="text-lg font-semibold">Available Offers</h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Bank Offer: 5% Cashback on XYZ Bank Credit Card</li>
              <li>Bank Offer: 10% off up to ₹1500 on orders over ₹5000</li>
              <li>Partner Offer: Buy 2 books, get 1 free</li>
            </ul>
          </div>

          <div className="mt-6 flex space-x-4">
            <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg">
              Add to Cart
            </button>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>

        {/* Right Section - Additional Details */}
        <div className="w-1/3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Delivery</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Check delivery availability for your location.
          </p>
          <input
            type="text"
            placeholder="Enter Pincode"
            className="w-full p-2 mt-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
          />
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg w-full">
            Check
          </button>

          <h2 className="mt-6 text-lg font-semibold">Warranty</h2>
          <p className="text-gray-600 dark:text-gray-300">
            1 Year Warranty Available
          </p>
        </div>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-4 mx-auto block bg-gray-800 dark:bg-gray-200 dark:text-black text-white py-2 px-4 rounded-lg"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default ProductDetails;
