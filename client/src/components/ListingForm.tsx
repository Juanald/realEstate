import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../authContext";

export default function ListingForm() {
  const user = JSON.parse(localStorage.getItem("user") || "");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    createdBy: user._id,
  });
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleFormSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    const submissionFormData = new FormData();
    for (const key in formData) {
      submissionFormData.append(key, formData[key as keyof typeof formData]);
    }
    if (selectedImages) {
      for (const img of selectedImages) {
        submissionFormData.append("images", img);
      }
    }
    try {
      const res = await fetch("http://localhost:5000/api/listings/", {
        method: "POST",
        body: submissionFormData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Listing creation failed");
      }

      const data = await res.json();

      // A modal popup over here would be nice
      navigate("/");
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Destructure name and value from the input
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Dynamically update the correct field based on name
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    setSelectedImages((prev) => [...prev, ...newFiles]);
    console.log(selectedImages);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Post a Listing
        </h1>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleFormSubmission}
          encType="multipart/form-data"
        >
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="file"
            multiple
            name="images"
            onChange={handleFileChange}
            accept="image/*"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Post
          </button>
        </form>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-500 p-4 rounded-lg mt-4">
            <p className="font-semibold text-center">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
