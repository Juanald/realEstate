import React, { useState } from "react";
import HeroImage from "../assets/hero.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // This will have to be a POST request.
      const res = await fetch("http://localhost:5000/api/listings", {
        method: "GET",
      });

      if (!res.ok) throw new Error("Listings not found");

      const data = await res.json();
      navigate("/search/listings", { state: { listings: data } });
    } catch (err: any) {
      setError(err.message);
    }
  };

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
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-4">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Find a listing..."
                name="search"
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
                }
                className="p-3 w-80 rounded-lg text-gray-500 placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
              >
                Search
              </button>
            </form>
          </div>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-500 p-4 rounded-lg mt-4">
              <p className="font-semibold text-center">{error}</p>
            </div>
          )}
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
