import React, { use, useEffect, useState } from "react";
import { sellerContact } from "../index";

function ProductDetails() {
  const [darkMode, setDarkMode] = useState(false);
  const [sellerDetails, setSellerDetails] = useState(false);
  let book = sessionStorage.getItem("bookDetails");
  console.log(book + " type of " + typeof book);
  const [bookDetails, setBookDetails] = useState("");
  const [dataFetch, setDataFetch] = useState({});
  useEffect(() => {
    if (book) {
      setBookDetails(book);
    }
  }, []);
  useEffect(() => {
    if (bookDetails) {
      fetchData();
    }
  });
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/fetchSellers/idMatched?id=${bookDetails}`
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
          <h1 className="text-3xl font-bold">{dataFetch.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Author: {dataFetch.author}
          </p>
          <p className="text-2xl font-semibold text-green-600 mt-2">
            {dataFetch.price}/-
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Special Offer: 10% off on first purchase
          </p>

          <div className="mt-6">
            <h2 className="text-lg font-semibold">Available Offers</h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Bank Offer: 5% Cashback on XYZ Bank Credit Card</li>
              <li>Bank Offer: 10% off up to ₹1500 on orders over ₹5000</li>
              <li>Partner Offer: Buy 3 books, get 1 free</li>
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
        {sellerDetails && (
          <div className="w-1/3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <img src={sellerContact} alt="seller png" className="w-50 h-50" />
            <h2 className="text-lg font-semibold">
              Seller, {dataFetch.username}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              By Book from our Seller, {dataFetch.username}
            </p>
            {Number(dataFetch.stocks) > 20 ? (
              <p className="text-1xl font-semibold text-green-600 mt-2">
                Book in Stock: {dataFetch.stocks}
              </p>
            ) : Number(dataFetch.stocks) > 10 ? (
              <p className="text-1xl font-semibold text-yellow-500 mt-2">
                Book in Stock: {dataFetch.stocks}
              </p>
            ) : (
              <p className="text-1xl font-semibold text-red-600 mt-2">
                Book in Stock: {dataFetch.stocks}
              </p>
            )}

            <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg w-full">
              Contact Seller Directly
            </button>

            <h2 className="mt-6 text-lg font-semibold">Warranty</h2>
            <p className="text-gray-600 dark:text-gray-300">
              1 Year Warranty Available
            </p>
          </div>
        )}
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
