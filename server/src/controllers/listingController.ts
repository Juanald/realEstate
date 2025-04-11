import Listing, { IListing } from "../models/Listing";
import { Request, Response } from "express";

export const createListing = async (req: Request, res: Response) => {
  try {
    const listing: IListing = await Listing.create(req.body);
    res.status(201).json(listing);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getListing = async (req: Request, res: Response) => {
  try {
    const listing: IListing | null = await Listing.findById(req.params.id);
    if (!listing) {
      res.status(404).json({ message: "Listing could not be found" });
    }
    res.status(200).json(listing);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getQueriedListings = async (req: Request, res: Response) => {
  console.log("Hit query endpoint");
  // For now, we retrieve all listings. TODO: Incorporate queried listings
  try {
    const listings: IListing[] | null = await Listing.find();
    if (!listings) {
      res.status(404).json({ message: "No listings found" });
    }
    res.status(200).json(listings);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const updateListing = async (req: Request, res: Response) => {
  try {
    const listing: IListing | null = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!listing) {
      res.status(404).json({ message: "Failed to update listing" });
    }
    res.status(200).json(listing);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteListing = async (req: Request, res: Response) => {
  try {
    const listing: IListing | null = await Listing.findByIdAndDelete(
      req.params.id
    );
    if (!listing) {
      res.status(404).json({ message: "Failed to find listing" });
    }
    res.status(200).json({ message: "Listing deleted successfully" });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
