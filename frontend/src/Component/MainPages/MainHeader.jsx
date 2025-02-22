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

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      console.log(query.length);
      if (query.length == 0) {
        setSuggestions([]);
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8080/search/books?query=${query}`
        );
        const data = await response.json();
        console.log(data);
        setSuggestions(data);
        console.log(suggestions);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    const timer = setTimeout(() => fetchSuggestions(), 300);
    return () => clearTimeout(timer);
  }, [query]);

  const ProductFound = (value) => {
    setQuery(value);
    navigate("/Main/Product", { replace: true });
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
        <div className="relative">
          <div className="bg-white/20 flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-lg transition focus-within:border-blue-500">
            <img
              src={Search}
              className="text-gray-500 mr-2 w-5 h-5"
              alt="Search"
            />
            <input
              type="text"
              placeholder="Search books..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowDropdown(true)}
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          {showDropdown && (
            <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-50">
              {loading && (
                <li className="px-4 py-2 text-gray-500">Loading...</li>
              )}
              {suggestions.length > 0 ? (
                suggestions.map((value, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                    onMouseDown={() => {
                      setQuery(value);
                      setShowDropdown(false);
                    }}
                    onClick={() => ProductFound(value)}
                  >
                    {value}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">No results found</li>
              )}
            </ul>
          )}
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
