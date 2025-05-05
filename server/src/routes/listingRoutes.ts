import { Router } from "express";
import {
  createListing,
  getListing,
  updateListing,
  deleteListing,
} from "../controllers/listingController";
import { getQueriedListings } from "../controllers/listingController";
import upload from "../middleware/upload";

// Instantiate a router object, to be mounted in the application
const router = Router();

router.post("/", upload.array("images", 3), createListing);
router.get("/search", getQueriedListings);
router.get("/:id", getListing);
router.put("/:id", updateListing); // Update the listing with the specified ID field
router.delete("/:id", deleteListing);

export default router;
