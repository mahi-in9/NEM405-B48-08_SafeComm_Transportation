import { Router } from "express";
import { body } from "express-validator";
import { auth } from "../middlewares/auth";
import checkRole from "../middlewares/checkRole";
import asyncHandler from "../middlewares/asyncHandler";
import {
  createReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport,
} from "../controllers/reportController";

const router = Router();

const reportValidation = [
  body("routeId").notEmpty().withMessage("routeId is required"),
  body("description").notEmpty().withMessage("description is required"),
  body("location").notEmpty().withMessage("location is required"),
  body("severity")
    .optional()
    .isIn(["low", "medium", "high"])
    .withMessage("Invalid severity value"),
];

router.post("/", auth, reportValidation, asyncHandler(createReport));

router.get(
  "/",
  auth,
  checkRole(["admin", "moderator"]),
  asyncHandler(getAllReports),
);

router.get(
  "/:id",
  auth,
  checkRole(["admin", "moderator"]),
  asyncHandler(getReportById),
);

router.put(
  "/:id",
  auth,
  checkRole(["admin", "moderator"]),
  reportValidation,
  asyncHandler(updateReport),
);

router.delete("/:id", auth, checkRole(["admin"]), asyncHandler(deleteReport));

export default router;
