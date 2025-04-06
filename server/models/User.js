// Models are used for Mongoose to create NoSQL linkages. Each user has a username, password, email, and bio
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // This should be hashed and encrypted
    bio: { type: String }, // Optional
  },
  { timestamps: true }
);

mongoose.exports = mongoose.model("User", userSchema); // Export the schema, a user shall have this shape.
