import { Router } from "express";
import { body } from "express-validator";
import { auth } from "../middlewares/auth";
import checkRole from "../middlewares/checkRole";
import asyncHandler from "../middlewares/asyncHandler";
import {
  createIncident,
  getAllIncidents,
  getIncidentById,
  updateIncident,
  deleteIncident,
} from "../controllers/incidentController";

const router = Router();

const incidentValidation = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("location").notEmpty().withMessage("Location is required"),
  body("severity")
    .optional()
    .isIn(["low", "medium", "high"])
    .withMessage("Invalid severity"),
];

router.post(
  "/",
  auth,
  checkRole(["admin", "moderator"]),
  incidentValidation,
  asyncHandler(createIncident),
);

router.get(
  "/",
  auth,
  checkRole(["admin", "moderator"]),
  asyncHandler(getAllIncidents),
);

router.get(
  "/:id",
  auth,
  checkRole(["admin", "moderator"]),
  asyncHandler(getIncidentById),
);

router.put(
  "/:id",
  auth,
  checkRole(["admin", "moderator"]),
  incidentValidation,
  asyncHandler(updateIncident),
);

router.delete("/:id", auth, checkRole(["admin"]), asyncHandler(deleteIncident));

export default router;
