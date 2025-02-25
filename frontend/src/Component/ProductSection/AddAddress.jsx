import React, { useState } from "react";

const statesOfIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const AddAddress = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
    alternatePhone: "",
    addressType: "home",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-violet-100 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
        Add Address
      </h2>
      <form className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-3 border rounded bg-white text-gray-900"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="10-digit mobile number"
          className="w-full p-3 border rounded bg-white text-gray-900"
          onChange={handleChange}
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          className="w-full p-3 border rounded bg-white text-gray-900"
          onChange={handleChange}
        />
        <input
          type="text"
          name="locality"
          placeholder="Locality"
          className="w-full p-3 border rounded bg-white text-gray-900"
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Address (Area and Street)"
          className="w-full p-3 border rounded bg-white text-gray-900"
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="city"
          placeholder="City/District/Town"
          className="w-full p-3 border rounded bg-white text-gray-900"
          onChange={handleChange}
        />
        <select
          name="state"
          className="w-full p-3 border rounded bg-white text-gray-900"
          onChange={handleChange}
        >
          <option value="">--Select State--</option>
          {statesOfIndia.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="landmark"
          placeholder="Landmark (Optional)"
          className="w-full p-3 border rounded bg-white text-gray-900"
          onChange={handleChange}
        />
        <input
          type="text"
          name="alternatePhone"
          placeholder="Alternate Phone (Optional)"
          className="w-full p-3 border rounded bg-white text-gray-900"
          onChange={handleChange}
        />
        <div className="mb-4 flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="addressType"
              value="home"
              checked={formData.addressType === "home"}
              onChange={handleChange}
            />{" "}
            <span>Home (All day delivery)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="addressType"
              value="work"
              checked={formData.addressType === "work"}
              onChange={handleChange}
            />{" "}
            <span>Work (Delivery between 10 AM - 5 PM)</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-3 rounded-lg shadow-md hover:bg-orange-600"
        >
          Save and Deliver Here
        </button>
        <button
          type="button"
          className="w-full text-center text-gray-700 p-3 mt-2 hover:underline"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddAddress;
