import { Router } from "express";
import { body } from "express-validator";
import { auth } from "../middlewares/auth";
import checkRole from "../middlewares/checkRole";
import asyncHandler from "../middlewares/asyncHandler";
import {
  createETA,
  getAllETAs,
  getETAByRoute,
  updateETA,
  deleteETA,
} from "../controllers/etaController";

const router = Router();

const etaValidation = [
  body("routeId").notEmpty().withMessage("Route ID is required"),
  body("vehicleId").notEmpty().withMessage("Vehicle ID is required"),
  body("etaTime").notEmpty().withMessage("ETA time is required"),
];

router.post(
  "/",
  auth,
  checkRole(["admin"]),
  etaValidation,
  asyncHandler(createETA),
);

router.get("/", auth, checkRole(["admin"]), asyncHandler(getAllETAs));

router.get("/route/:routeId", auth, asyncHandler(getETAByRoute));

router.put(
  "/:id",
  auth,
  checkRole(["admin"]),
  etaValidation,
  asyncHandler(updateETA),
);

router.delete("/:id", auth, checkRole(["admin"]), asyncHandler(deleteETA));

export default router;
