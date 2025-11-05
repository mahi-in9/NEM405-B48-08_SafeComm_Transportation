import { Router } from "express";
import {
  registerUser,
  loginUser,
  getProfile,
} from "../controllers/userController";
import { auth } from "../middlewares/auth";
import checkRole from "../middlewares/checkRole";

const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", auth, getProfile);

router.get("/users", auth, checkRole(["admin"]), async (_req, res) => {
  const User = (await import("../models/User")).default;
  try {
    const users = await User.find().select("-password");
    res.status(200).json({ success: true, data: users });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
