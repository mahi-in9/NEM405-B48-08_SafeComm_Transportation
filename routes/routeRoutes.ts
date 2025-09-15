import { Router } from "express";
import { auth } from "../middlewares/auth";
import checkRole from "../middlewares/checkRole";
import {
  createRoute,
  getAllRoutes,
  getRouteById,
  updateRoute,
  deleteRoute,
} from "../controllers/routeController";

const router = Router();

router.post("/", auth, checkRole(["admin"]), createRoute);
router.put("/:id", auth, checkRole(["admin"]), updateRoute);
router.delete("/:id", auth, checkRole(["admin"]), deleteRoute);

router.get("/", auth, getAllRoutes);
router.get("/:id", auth, getRouteById);

export default router;
