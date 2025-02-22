import React, { useEffect } from "react";

function Product() {
  const selectedBook = sessionStorage.getItem("selectedBook");
  useEffect(() => {}, [selectedBook]);
  return (
    <div>
      <h1>book found</h1>
    </div>
  );
}

export default Product;
