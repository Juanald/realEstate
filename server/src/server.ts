import { Request, Response } from "express";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes";
import listingRoutes from "./routes/listingRoutes";
require("dotenv").config({ path: "../.env" }); // Loads into .env

const app = express();
app.use(express.json()); // Automatically parse raw JSON formatted strings into JSON
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // CORS middleware for cross access control
app.use(morgan("combined")); // For automatic HTTP logging
app.use("/uploads", express.static("uploads")); // For local storage of images

// Middleware to mount routers onto predefined endpoints
app.use("/api/users", userRoutes);
app.use("/api/listings", listingRoutes);

// an HTTP protocol request and response, root.
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the other sideeee");
});

const PORT = process.env.PORT || 5000; // Defined either in .env, or default port 5000
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err: any) => console.log(err));
