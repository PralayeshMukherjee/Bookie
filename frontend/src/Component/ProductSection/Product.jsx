import React, { useEffect } from "react";

function Product() {
  const selectedBook = sessionStorage.getItem("selectedBook");
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
  };
  return (
    <div>
      <h1>book found</h1>
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
