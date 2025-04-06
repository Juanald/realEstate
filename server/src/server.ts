import { Request, Response } from "express";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import listingRoutes from "./routes/listingRoutes";
require("dotenv").config({ path: "../.env" }); // Loads into .env

const app = express();
app.use(cors()); // CORS middleware for cross access control
app.use(express.json()); // Automatically parse raw JSON formatted strings into JSON

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
