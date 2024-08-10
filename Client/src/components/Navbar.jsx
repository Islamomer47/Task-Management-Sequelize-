import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between items-center text-white">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Tasks
          </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <button onClick={logout} className="hover:text-gray-400">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register" className="hover:text-gray-400">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-400">
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
