import { formToJSON } from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Destructure name and value from the input
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Dynamically update the correct field based on name
    }));
  };

  const handleFormSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await res.json();
      // Store user and JWT in local storage for authenticated requests
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/"); // Using the global authentication context to get user login info (Hello, name instead of signup, and logout to clear local storage and sign outs)
    } catch (e: any) {
      setError(e.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome to RealEstateX
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleFormSubmission}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-500">
          Don't have an account?
          <span className="ml-1">
            <Link
              to="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up
            </Link>
          </span>
        </p>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-500 p-4 rounded-lg mt-4">
            <p className="font-semibold text-center">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
