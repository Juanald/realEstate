import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// This component should take a list of listings of interface IListing, and hydrate ListingCard.tsx components, showing them in a tiled manner. Tile functionality in ListingCard.tsx, add the associated route.
export default function Search() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // This will have to be a POST request.
      const params = new URLSearchParams({
        search: search,
      });
      const res = await fetch(
        `http://localhost:5000/api/listings/search?${params.toString()}`
      );

      if (!res.ok) throw new Error("Listings not found");

      const data = await res.json();
      navigate("/search/listings", { state: { listings: data } }); // useLocation() hook to capture state
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit} className="flex gap-4 border-black">
          <input
            type="text"
            placeholder="Find a listing..."
            name="search"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            className="p-3 w-80 rounded-lg text-gray-500 placeholder-gray-500 bg-slate-100"
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
  );
}
