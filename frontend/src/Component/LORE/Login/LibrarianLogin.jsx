import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import LibrarianLoginImage from "../../../images/LibrarianLoginImage.png";

export default function LibraryLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* Left Section - Login Form */}
      <div className="w-1/2 flex items-center justify-center p-12">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-4xl font-bold text-purple-700 dark:text-purple-500">
            Welcome Back!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Add your Library and get connected with more customers
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium dark:text-gray-300">
                Email *
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium dark:text-gray-300">
                Password *
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 dark:text-gray-300"
                >
                  {/* Toggle Password Icon */}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a
                href="#"
                className="text-purple-500 dark:text-purple-400 text-sm hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button className="w-full bg-purple-600 dark:bg-purple-700 text-white p-3 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-800 transition-all">
              Log In
            </button>
          </form>
          <div className="my-4 text-center text-gray-600 dark:text-gray-400">
            Or, login with
          </div>
          <button className="w-full flex items-center justify-center border border-gray-300 dark:border-gray-700 p-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
          <div className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/LibrarianRegister"
              className="text-purple-500 dark:text-purple-400 hover:underline"
            >
              Register here
            </Link>
          </div>
        </div>
      </div>
      {/* Right Section - Decorative Image */}
      <div className="w-1/2 bg-gradient-to-r from-indigo-500 to-purple-700 dark:from-indigo-700 dark:to-purple-900 flex items-center justify-center p-4">
        <img
          src={LibrarianLoginImage}
          alt="Library Login"
          className="max-w-md rounded-lg shadow-lg max-h-screen"
        />
      </div>
    </div>
  );
}
