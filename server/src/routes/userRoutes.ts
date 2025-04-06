import { Router } from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";

// Instantiate a router object, to be mounted in the application
const router = Router();

router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", updateUser); // Upadate the user with the specified ID field
router.delete("/:id", deleteUser);

export default router;
