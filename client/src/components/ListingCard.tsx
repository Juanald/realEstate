import React, { useState } from "react";
import { IListing } from "../../../server/src/models/Listing"; // Update this import to a shared folder eventually
import Modal from "./Modal";

interface ListingProps {
  listing: IListing;
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
        <h2 className="text-xl font-semibold">{listing.title}</h2>
        <p className="text-gray-600">${listing.price.toString()}</p>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">{listing.title}</h2>
        <p className="mb-2 text-gray-700">Price: ${listing.price.toString()}</p>
        <p className="text-gray-600">{listing.description}</p>
      </Modal>
    </>
  );
}
