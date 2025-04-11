import { Router } from "express";
import {
  createListing,
  getListing,
  updateListing,
  deleteListing,
} from "../controllers/listingController";
import { getQueriedListings } from "../controllers/listingController";

// Instantiate a router object, to be mounted in the application
const router = Router();

router.post("/", createListing);
router.get("/", getQueriedListings);
router.get("/:id", getListing);
router.put("/:id", updateListing); // Update the listing with the specified ID field
router.delete("/:id", deleteListing);

export default router;
