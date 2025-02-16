import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLoginPNG } from "../../index";

function UserLogin() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const response = await fetch("http://localhost:8080/login/userLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    if (data.exists) {
      sessionStorage.setItem("isLogin", "true");
      navigate("/Main");
    } else {
      alert("User not Register");
    }
  };
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${userLoginPNG})` }}
    >
      <div className="w-80 p-6 bg-white/20 bg-opacity-20 backdrop-blur-md shadow-md rounded-lg border border-white">
        <h2 className="text-white text-xl font-semibold text-center mb-4">
          User Login
        </h2>
        <form onSubmit={handelSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="username" className="text-white block mb-1">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 bg-transparent border border-white text-white rounded-lg focus:outline-none placeholder-white"
              placeholder="Enter username"
              onChange={handelChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-white block mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 bg-transparent border border-white text-white rounded-lg focus:outline-none placeholder-white"
              placeholder="Enter password"
              onChange={handelChange}
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black py-2 rounded-lg hover:bg-transparent hover:text-white border border-white transition"
          >
            Login
          </button>
          <p className="text-white text-xs text-center">
            Don't have an account?{" "}
            <Link
              to="/userRegister"
              className="text-orange-400 hover:text-orange-500"
            >
              Register as User
            </Link>
          </p>
          <p className="text-white text-xs text-center">
            Login as Admin:{" "}
            <Link
              to="/SellerLogin"
              className="text-orange-400 hover:text-orange-500"
            >
              Login as Seller
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
