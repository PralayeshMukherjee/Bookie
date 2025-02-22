import React, { useEffect } from "react";

function Product() {
  const selectedBook = sessionStorage.getItem("selectedBook");
  useEffect(() => {
    console.log(fetching);
    fetchData();
  }, [selectedBook]);
  const fetchData = async () => {
    const response = await fetch("");
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
