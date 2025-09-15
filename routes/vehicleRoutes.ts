import { Router } from "express";
import { auth } from "../middlewares/auth";
import checkRole from "../middlewares/checkRole";
import {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
} from "../controllers/vehicleController";

const router = Router();

router.post("/", auth, checkRole(["admin"]), createVehicle);

router.get("/", auth, getAllVehicles);

router.get("/:id", auth, getVehicleById);

router.put("/:id", auth, checkRole(["admin"]), updateVehicle);

router.delete("/:id", auth, checkRole(["admin"]), deleteVehicle);

export default router;
