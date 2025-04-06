// Name
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Loads into .env

app.use(cors()); // CORS middleware for cross access control
app.use(express.json()); // ?

// an HTTP protocol request and response, root.
app.get("/", (req, res) => {
  res.send("Hello from the other sideeee");
});

const PORT = process.env.PORT || 5000; // Defined either in .env, or default port 5000
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
