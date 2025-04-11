import React, { Children, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { IListing } from "../../../server/src/models/Listing"; // Update this import to a shared folder eventually
import ListingCard from "../components/ListingCard";
import Search from "./Search";

export default function Listings() {
  const location = useLocation(); // Will find through state
  const listings: IListing[] = location.state?.listings || []; // If we can find state, we will populate it

  return (
    <>
      <Search />
      <div>
        {listings.length > 0 ? (
          listings.map((listing: IListing) => (
            // <Link
            //   key={listing._id as React.Key}
            //   to={`/search/listings/${listing._id}`}
            //   state={{ listing }}
            // >
            <ListingCard listing={listing} />
            // </Link>
          ))
        ) : (
          <p>No listings found</p>
        )}
      </div>
    </>
  );
}
