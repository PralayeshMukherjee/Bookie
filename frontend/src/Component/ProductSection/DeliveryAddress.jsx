import React, { useEffect, useState } from "react";

const addresses = [
  {
    id: 1,
    name: "Raj Mukherjee",
    phone: "9382530377",
    address:
      "MB 134, Purple Sunflower, Mohisbathan, New Town, West Bengal - 700102",
  },
  {
    id: 2,
    name: "Pralayesh Mukherjee",
    phone: "9382530377",
    address: "House, Andal High School Para, Andal, West Bengal - 713321",
  },
  {
    id: 3,
    name: "Biren Mukherjee",
    phone: "9732134858",
    address: "H5HV+FW7, Andal High School Para, Andal, West Bengal - 713321",
  },
];

const DeliveryAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  const [bookPrice, setBookPrice] = useState(0);
  const [packingPrice, setPackingPrice] = useState(29);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setBookPrice(Number(sessionStorage.getItem("bookPrice")));
    setTotalPrice(Number(sessionStorage.getItem("bookPrice")) + packingPrice);
  }, [bookPrice]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-200 to-violet-300 p-6">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg text-gray-900">
        {/* Login Section */}
        <div className="border p-4 rounded-md mb-4 bg-gray-100">
          <h2 className="font-semibold text-lg">Login ✅</h2>
          <p className="text-gray-700">Raj Mukherjee +919382530377</p>
          <button className="border px-4 py-1 mt-2 rounded bg-blue-500 text-white hover:bg-blue-600">
            Change
          </button>
        </div>

        {/* Delivery Address */}
        <div className="border p-4 rounded-md mb-4 bg-gray-100">
          <h2 className="font-semibold text-lg mb-2">Delivery Address</h2>
          {addresses.map((addr) => (
            <div key={addr.id} className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                name="address"
                checked={selectedAddress.id === addr.id}
                onChange={() => setSelectedAddress(addr)}
              />
              <div>
                <p className="font-medium text-gray-800">
                  {addr.name} ({addr.phone})
                </p>
                <p className="text-gray-600 text-sm">{addr.address}</p>
              </div>
            </div>
          ))}
          <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Deliver Here
          </button>
        </div>

        {/* Price Details */}
        <div className="border p-4 rounded-md bg-gray-100">
          <h2 className="font-semibold text-lg mb-2">Price Details</h2>
          <p className="flex justify-between">
            Price (1 item) <span>₹{bookPrice}</span>
          </p>
          <p className="flex justify-between">
            Delivery Charges <span className="text-green-500">₹40 FREE</span>
          </p>
          <p className="flex justify-between">
            Packaging Charge <span>₹{packingPrice}</span>
          </p>
          <hr className="my-2 border-gray-300" />
          <p className="flex justify-between font-semibold">
            Total Payable <span>₹{totalPrice}</span>
          </p>
          <p className="text-green-500 text-sm">
            Your Total Savings on this order ₹3,571
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
