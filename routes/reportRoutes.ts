import { Router } from "express";
import { auth } from "../middlewares/auth";
import checkRole from "../middlewares/checkRole";
import {
  createReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport,
} from "../controllers/reportController";

const router = Router();

router.post("/", auth, createReport);

router.get("/", auth, checkRole(["admin", "moderator"]), getAllReports);
router.get("/:id", auth, checkRole(["admin", "moderator"]), getReportById);
router.put("/:id", auth, checkRole(["admin", "moderator"]), updateReport);
router.delete("/:id", auth, checkRole(["admin"]), deleteReport);

export default router;
