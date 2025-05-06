import React, { JSX, useState } from "react";
import { IImage, IListing } from "../../../server/src/models/Listing"; // Update this import to a shared folder eventually
import Modal from "./Modal";

interface ListingProps {
  listing: IListing;
}

function capitalize(str: String): String {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function populateImages(images: IImage[]): JSX.Element[] {
  return images.map((img) => {
    return (
      <img
        src={("http://localhost:5000" + img.url) as string}
        alt={img.title as string}
      />
    );
  });
}

export default function ListingCard({ listing }: ListingProps) {
  const [isOpen, setIsOpen] = useState(false); // Use this to open the modal
  return (
    <>
      <div
        key={listing.id}
        onClick={() => setIsOpen(true)}
        className="p-4 border rounded-lg shadow hover:shadow-lg transition hover:cursor-pointer"
      >
        <h2 className="text-xl font-semibold">{capitalize(listing.title)}</h2>
        <div className="flex">
          {listing.images.length > 0 && populateImages(listing.images)}
        </div>
        <p className="text-gray-600">
          ${listing.price.toString()} | {listing.location}
        </p>
        <p>{listing.description}</p>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">{listing.title}</h2>
        {listing.images.length > 0 && populateImages(listing.images)}
        <p className="mb-2 text-gray-700">Price: ${listing.price.toString()}</p>
        <p className="text-gray-600">{listing.description}</p>
      </Modal>
    </>
  );
}
