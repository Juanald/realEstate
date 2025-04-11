import React from "react";
import { IListing } from "../../../server/src/models/Listing"; // Update this import to a shared folder eventually

interface ListingProps {
  listing: IListing;
}

export default function ListingCard({ listing }: ListingProps) {
  return (
    <div
      key={listing.id}
      className="p-4 border rounded-lg shadow hover:shadow-lg transition"
    >
      <h2 className="text-xl font-semibold">{listing.title}</h2>
      <p className="text-gray-600">${listing.price.toString()}</p>
    </div>
  );
}
