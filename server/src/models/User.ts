// Models are used for Mongoose to create NoSQL linkages. Each user has a username, password, email, and bio
import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  username: String;
  email: String;
  password: String;
  bio: String;
}

// A schema that conforms to the user interface
const userSchema = new mongoose.Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // This should be hashed and encrypted
    bio: { type: String }, // Optional
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
