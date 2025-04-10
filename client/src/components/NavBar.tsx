import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../authContext";

export default function NavBar() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

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
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <Link to="/" className="text-3xl font-bold">
        RealEstateX
      </Link>
      {isLoggedIn ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={handleLogout}
        >
          Log out
        </button>
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
