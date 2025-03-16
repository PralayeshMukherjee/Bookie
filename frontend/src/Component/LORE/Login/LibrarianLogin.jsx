import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Section - Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-gray-800 p-10">
        <div className="max-w-md w-full">
          <div className="flex justify-center mb-6">
            <span className="text-4xl font-bold text-purple-400">✦</span>
          </div>
          <h2 className="text-3xl font-semibold mb-4">Welcome back!</h2>
          <p className="text-gray-400 mb-6">
            Enter to get unlimited access to data & information.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input
                type="email"
                placeholder="Enter your mail address"
                className="mt-1 w-full p-3 border rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password *</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="mt-1 w-full p-3 border rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mr-2"
                />
                Remember me
              </label>
              <a href="#" className="text-purple-400 text-sm">
                Forgot your password?
              </a>
            </div>
            <button className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700">
              Log In
            </button>
          </form>
          <div className="my-6 text-center text-gray-400">Or, Login with</div>
          <button className="w-full flex items-center justify-center border p-3 rounded-lg bg-gray-700 hover:bg-gray-600">
            <FaGoogle className="mr-2" /> Sign up with Google
          </button>
          <div className="text-center mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-purple-400">
              Register here
            </a>
          </div>
        </div>
      </div>
      {/* Right Section - Decorative Graphics */}
      <div className="w-1/2 bg-gradient-to-r from-indigo-700 to-purple-900 flex items-center justify-center">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/your-pattern-image.svg')` }}
        ></div>
      </div>
    </div>
  );
}
