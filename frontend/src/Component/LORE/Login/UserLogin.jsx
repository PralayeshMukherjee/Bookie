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
    // <div
    //   className="flex justify-center items-center h-screen bg-cover bg-center"
    //   style={{ backgroundImage: `url(${userLoginPNG})` }}
    // >
    //   <div className="w-80 p-6 bg-white/20 bg-opacity-20 backdrop-blur-md shadow-md rounded-lg border border-white">
    //     <h2 className="text-white text-xl font-semibold text-center mb-4">
    //       User Login
    //     </h2>
    //     <form onSubmit={handelSubmit} className="flex flex-col space-y-4">
    //       <div>
    //         <label htmlFor="username" className="text-white block mb-1">
    //           Username:
    //         </label>
    //         <input
    //           type="text"
    //           id="username"
    //           name="username"
    //           className="w-full p-2 bg-transparent border border-white text-white rounded-lg focus:outline-none placeholder-white"
    //           placeholder="Enter username"
    //           onChange={handelChange}
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="password" className="text-white block mb-1">
    //           Password:
    //         </label>
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           className="w-full p-2 bg-transparent border border-white text-white rounded-lg focus:outline-none placeholder-white"
    //           placeholder="Enter password"
    //           onChange={handelChange}
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="bg-white text-black py-2 rounded-lg hover:bg-transparent hover:text-white border border-white transition"
    //       >
    //         Login
    //       </button>
    //       <p className="text-white text-xs text-center">
    //         Don't have an account?{" "}
    //         <Link
    //           to="/userRegister"
    //           className="text-orange-400 hover:text-orange-500"
    //         >
    //           Register as User
    //         </Link>
    //       </p>
    //       <p className="text-white text-xs text-center">
    //         Login as Admin:{" "}
    //         <Link
    //           to="/SellerLogin"
    //           className="text-orange-400 hover:text-orange-500"
    //         >
    //           Login as Seller
    //         </Link>
    //       </p>
    //     </form>
    //   </div>
    // </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left: Login Form */}
        <div className="w-1/2 p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="text-3xl font-bold">⚡</div>
            <p className="text-gray-500 mt-2">
              See your growth and get consulting support!
            </p>
          </div>
          <button className="w-full flex items-center justify-center px-4 py-2 border rounded-lg text-gray-600 shadow-sm hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-5 h-5 mr-2"
              alt="Google Logo"
            />{" "}
            Sign in with Google
          </button>
          <div className="text-center text-gray-400 my-4">
            or Sign in with Email
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email*</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password*</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-500"
                />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-indigo-500 text-sm">
                Forgot password?
              </a>
            </div>
            <button className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600">
              Login
            </button>
          </form>
          <p className="text-center text-gray-500 mt-4">
            Not registered yet?{" "}
            <a href="#" className="text-indigo-500">
              Create an Account
            </a>
          </p>
        </div>

        {/* Right: Promo Section */}
        <div className="w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8 flex flex-col justify-center relative">
          <h2 className="text-2xl font-bold">Turn your ideas into reality.</h2>
          <p className="text-sm mt-2">
            Consistent quality and experience across all platforms and devices.
          </p>
          <div className="absolute top-6 right-6 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-md">
            <h3 className="text-sm font-semibold">Rewards</h3>
            <p className="text-lg font-bold">172,832 Points</p>
          </div>
          <div className="mt-6">
            <p className="text-lg font-bold">$162,751</p>
            <p className="text-sm">
              Last year:{" "}
              <span className="text-yellow-300">$23,827 (August)</span>
            </p>
            <img
              src="https://via.placeholder.com/150x50"
              alt="Graph"
              className="mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
