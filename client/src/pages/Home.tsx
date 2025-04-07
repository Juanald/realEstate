import React from "react";
import HeroImage from "../assets/hero.jpg";

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
        <div className="flex items-center justify-center space-x-4">
          <input
            type="text"
            placeholder="Find a listing..."
            className="p-3 w-80 rounded-lg text-gray-500 placeholder-gray-500"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full bg-gray-800 py-4 text-center text-white">
        <p>&copy; 2025 RealEstateX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
