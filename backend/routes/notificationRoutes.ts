import { Router } from "express";
import { auth } from "../middlewares/auth";
import checkRole from "../middlewares/checkRole";
import {
  createNotification,
  getUserNotifications,
  getAllNotifications,
  deleteNotification,
} from "../controllers/notificationController";

const router = Router();

router.post("/", auth, createNotification);
router.get("/", auth, getUserNotifications);

router.get("/all", auth, checkRole(["admin"]), getAllNotifications);

router.delete("/:id", auth, checkRole(["admin"]), deleteNotification);

export default router;
