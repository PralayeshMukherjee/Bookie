import React from "react";
import { Link } from "react-router-dom";
export default function FooterLibrary() {
  <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
    <footer className="bg-gray-800 text-white text-center p-6 mt-12">
      <p className="text-sm">&copy; 2025 Lando. All rights reserved.</p>
      <ul className="flex justify-center space-x-6 mt-2">
        <li>
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  </div>;
}
