import React from "react";

function Product() {
  const selectedBook = sessionStorage.getItem("selectedBook");
  return (
    <div>
      <h1>book found</h1>
    </div>
  );
}

export default Product;
