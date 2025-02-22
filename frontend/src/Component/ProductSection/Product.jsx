import React, { useEffect, useState } from "react";

function Product() {
  const selectedBook = sessionStorage.getItem("selectedBook");
  const [dataFetch, setDataFetch] = useState([]);
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
    <div>
      <h1>book is:-</h1>
      <ul>
        {dataFetch.map((value, idx) => (
          <li key={idx}>
            {value.title}
            {value.price}
            {value.author}
            {value.stocks}
            {value.username}
            <hr />
          </li>
        ))}
      </ul>
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
