import { Router } from "express";
import { auth } from "../middlewares/auth";
import checkRole from "../middlewares/checkRole";
import asyncHandler from "../middlewares/asyncHandler";
import { getStats } from "../controllers/statsController";

const router = Router();

router.get("/", auth, checkRole(["admin"]), asyncHandler(getStats));

export default router;
