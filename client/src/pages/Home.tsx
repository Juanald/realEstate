import React, { useState } from "react";
import HeroImage from "../assets/hero.jpg";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Home = () => {
  return (
    <div className="relative h-screen bg-gray-900">
      <img
        src={HeroImage}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Search Box */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center text-white w-full px-4">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Property</h1>
        <Search />
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full bg-gray-800 py-4 text-center text-white">
        <p>&copy; 2025 RealEstateX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
