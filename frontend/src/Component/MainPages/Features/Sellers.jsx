import React, { useEffect, useState } from "react";

function Sellers() {
  const [sellers, setSellers] = useState([]);
  const [product, setProduct] = useState("");
  useEffect(() => {
    const query = sessionStorage.getItem("title");
    setProduct(query);
    const sellerFetch = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/feature/fetchSeller",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ product }),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to load from");
        }
        const data = await response.json();
        setSellers(data);
        console.log("Fetched sellers:", data);
      } catch (error) {
        console.log("Error fetching sellers:", error);
      }
    };
    sellerFetch();
  }, [product]);
  return (
    <div>
      {sellers.length > 0 && (
        <ul className="mt-4 bg-white shadow-lg rounded p-4">
          {sellers.map((seller) => (
            <li key={seller.id} className="p-2 border-b">
              📚 Seller: {seller.name} | 📧 {seller.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sellers;
