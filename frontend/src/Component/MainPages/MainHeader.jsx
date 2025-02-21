import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Library,
  User,
  Profile,
  Setting,
  Help,
  Logout,
  Search,
} from "../index";

function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();
  useEffect(() => {
    const isLoginSeller = sessionStorage.getItem("isValidSeller") === "true";
    const isLoginUser = sessionStorage.getItem("isLogin") === "true";
    if (!isLoginSeller && !isLoginUser) {
      console.log("No user is logged in. Redirecting to userLogin...");
      navigate("/userLogin", { replace: true });
      return;
    }
    if (isLoginSeller) {
      console.log("Seller is logged in. Redirecting to MainHome...");
      navigate("/Main/MainHome", { replace: true });
      return;
    }
    if (isLoginUser) {
      console.log("User is logged in. Allowing access.");
      navigate("/Main/MainHome", { replace: true });
    }
  }, []);
  const navigateToLogout = useNavigate();
  const LogoutUser = () => {
    sessionStorage.removeItem("isLogin");
    sessionStorage.removeItem("isValidSeller");
    navigateToLogout("/", { replace: true });
  };
  return (
    <header className="shadow sticky z-50 top-0">
      {/* <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        Navbar */}
      <nav className="flex justify-between items-center p-5 bg-gray-900 text-white">
        <img src={Library} alt="Logo" className="w-24" />
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to={"/Main/MainHome"}
              className={({ isActive }) =>
                `hover:text-orange-300 ${
                  isActive
                    ? "text-orange-300 hover:text-orange-400"
                    : "text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={
                sessionStorage.getItem("isValidSeller") === "true"
                  ? "/Main/SellerFeature"
                  : "/Main/features"
              }
              className={({ isActive }) =>
                `hover:text-orange-300 ${
                  isActive
                    ? "text-orange-300 hover:text-orange-400"
                    : "text-white"
                }`
              }
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Main/about"}
              className={({ isActive }) =>
                `hover:text-orange-300 ${
                  isActive
                    ? "text-orange-300 hover:text-orange-400"
                    : "text-white"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={
                (sessionStorage.getItem("isValidSeller") ||
                  sessionStorage.getItem("isLogin")) === "true"
                  ? "/Main/Contact"
                  : "/Main"
              }
              className={({ isActive }) =>
                `hover:text-orange-300 ${
                  isActive
                    ? "text-orange-300 hover:text-orange-400"
                    : "text-white"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="bg-white/20 flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-lg transition focus-within:border-blue-500">
          <img
            src={Search}
            className="text-gray-500 mr-2 w-5 h-5"
            alt="Search"
          />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="relative">
          <img
            src={User}
            alt="User"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={toggleMenu}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
              <div className="p-4 flex items-center space-x-3 border-b">
                <img src={User} alt="User" className="w-12 h-12 rounded-full" />
                <h3>
                  <Link to="/Profile/Me" className="hover:underline">
                    Me
                  </Link>
                </h3>
              </div>
              <div className="p-2">
                <Link
                  to={
                    sessionStorage.getItem("isValidSeller") === "true"
                      ? "/Main/EditSectionSeller"
                      : "/SellerLogin"
                  }
                  className="block px-4 py-2 hover:bg-gray-200 flex items-center"
                >
                  <img src={Profile} alt="Edit" className="w-6 h-6 mr-2" /> Edit
                  Profile
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 hover:bg-gray-200 flex items-center"
                >
                  <img src={Setting} alt="Settings" className="w-6 h-6 mr-2" />{" "}
                  Settings & Privacy
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 hover:bg-gray-200 flex items-center"
                >
                  <img src={Help} alt="Help" className="w-6 h-6 mr-2" /> Help &
                  Support
                </Link>
                <Link
                  onClick={LogoutUser}
                  className="block px-4 py-2 hover:bg-gray-200 flex items-center"
                >
                  <img src={Logout} alt="Logout" className="w-6 h-6 mr-2" />{" "}
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default MainHeader;
