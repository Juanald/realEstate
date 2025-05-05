import mongoose, { Document } from "mongoose";

export interface IImage {
  title: String;
  url: String;
}

export interface IListing extends Document {
  title: String;
  description: String;
  price: Number;
  location: String;
  createdBy: mongoose.Schema.Types.ObjectId;
  images: IImage[];
}

const listingSchema = new mongoose.Schema<IListing>(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Refers to a user schema, like a foreign key
    images: [
      {
        title: String,
        url: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IListing>("Listing", listingSchema);
