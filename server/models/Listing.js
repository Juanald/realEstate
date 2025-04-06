const mongoose = require("mongoose");

const listingSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Refers to a user schema, like a foreign key
  },
  { timestamps: true }
);

mongoose.exports = mongoose.model("Listing", listingSchema);
