import React, { useEffect } from "react";

function Product() {
  const selectedBook = sessionStorage.getItem("selectedBook");
  useEffect(() => {
    console.log(fetching);
  }, [selectedBook]);
  const fetchData = async () => {};
  return (
    <div>
      <h1>book found</h1>
    </div>
  );
}

export default Product;
