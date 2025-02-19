import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    tel: "",
    message: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (formData.email == "") {
      alert("Please fill the email field first");
    } else if (formData.username == "") {
      alert("Please fill the username field first");
    } else {
      try {
        const sendOTPResponse = await fetch(
          "http://localhost:8080/mail/sendOtp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              username: formData.username,
            }),
          }
        );
        const data = await sendOTPResponse.json();
        console.log(data);
        if (data.isMailSend) {
          alert("OTP send to your email");
        } else {
          alert("OTP not send!!! Please try again later");
        }
      } catch (error) {
        console.log("Error:- ", error);
      }
    }
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (sessionStorage.getItem("isVerified") != "true") {
      alert("Please verify the OTP first");
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/mail/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      if (result.isContactMailSend) {
        sessionStorage.setItem("isContactMailSend", "true");
        setFormData({});
        navigate("/MailSuccess");
      } else {
        alert(
          "Message not send!!! Please fill the form correcty or try again later"
        );
      }
    } catch (error) {
      console.log("Error:- ", error);
    }
  };
  const [otp, setOtp] = useState({ otp: "" });
  const otpChange = (e) => {
    setOtp({ otp: e.target.value });
  };
  const verifyOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/verify/verifyOTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: otp.otp, username: formData.username }),
      });
      const result = await response.json();
      if (result.isVerified == 2) {
        alert("OTP Verified");
        sessionStorage.setItem("isVerified", "true");
      } else if (result.isVerified == 1) {
        alert("OTP is incorrect");
      } else {
        alert("User not found");
      }
    } catch (error) {
      console.log("Error:- ", error);
    }
  };
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-violet-100 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-violet-200 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Acme Inc, Street, State, Postal Code
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +44 1234567890
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  info@acme.org
                </div>
              </div>
            </div>

            <form
              className="p-6 flex flex-col justify-center"
              onSubmit={formSubmit}
            >
              <div className="flex flex-col">
                <label htmlFor="username" className="hidden">
                  Full Name
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-violet-200 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:border-2 focus:outline-none"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-violet-200 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:border-2 focus:outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                onClick={handleSendOtp}
                className="bg-violet-400 w-20 h-7 mt-1 rounded-lg font-semibold text-white hover:bg-violet-600 transition ease-in-out duration-300"
              >
                Send OTP
              </button>

              <div className="flex flex-col mt-2">
                <label htmlFor="otp" className="hidden">
                  OTP
                </label>
                <input
                  type="number"
                  name="otp"
                  id="otp"
                  placeholder="OTP via Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-violet-200 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:border-2 focus:outline-none"
                  onChange={otpChange}
                  required
                />
              </div>
              <button
                onClick={verifyOTP}
                className="bg-violet-400 w-20 h-7 mt-1 rounded-lg font-semibold text-white hover:bg-violet-600 transition ease-in-out duration-300"
              >
                Verify
              </button>
              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="number"
                  name="tel"
                  id="tel"
                  placeholder="Mobile Number"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-violet-200 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:border-2 focus:outline-none"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="message" className="hidden">
                  Message
                </label>
                <textarea
                  type="message"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-violet-200 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:border-2 focus:outline-none"
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
