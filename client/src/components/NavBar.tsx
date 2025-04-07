import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <Link to="/" className="text-3xl font-bold">
        RealEstateX
      </Link>
      <Link
        to="/login"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Sign in
      </Link>
    </nav>
  );
}
