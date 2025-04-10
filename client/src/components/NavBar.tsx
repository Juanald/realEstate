import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../authContext";

export default function NavBar() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <Link to="/" className="text-3xl font-bold">
        RealEstateX
      </Link>
      {isLoggedIn ? (
        <div className="gap-4 flex">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={handleLogout}
          >
            Log out
          </button>
          <Link
            to="/listing/post"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Post Listing
          </Link>
        </div>
      ) : (
        <Link
          to="/signup"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Sign up
        </Link>
      )}
    </nav>
  );
}
