import React, { Children, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { IListing } from "../../../server/src/models/Listing"; // Update this import to a shared folder eventually
import ListingCard from "../components/ListingCard";

export default function Listings() {
  const location = useLocation(); // Will find through state
  const listings: IListing[] = location.state?.listings || []; // If we can find state, we will populate it

  return (
    <div>
      {listings.length > 0 ? (
        listings.map((listing: IListing) => <ListingCard listing={listing} />)
      ) : (
        <p>No listings found</p>
      )}
    </div>
  );
}
