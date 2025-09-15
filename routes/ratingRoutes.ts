import { Router } from "express";
import { auth } from "../middlewares/auth";
import {
  createRating,
  getRatingsByRoute,
  getUserRatings,
  updateRating,
  deleteRating,
} from "../controllers/ratingController";

const router = Router();

router.post("/", auth, createRating);
router.get("/route/:routeId", auth, getRatingsByRoute);
router.get("/me", auth, getUserRatings);
router.put("/:id", auth, updateRating);
router.delete("/:id", auth, deleteRating);

export default router;
