import { Router } from "express";
import { auth } from "../middlewares/auth";
import asyncHandler from "../middlewares/asyncHandler";
import {
  createSession,
  getUserSessions,
  deleteSession,
} from "../controllers/sessionController";

const router = Router();

router.post("/", auth, asyncHandler(createSession));

router.get("/", auth, asyncHandler(getUserSessions));

router.delete("/:id", auth, asyncHandler(deleteSession));

export default router;
