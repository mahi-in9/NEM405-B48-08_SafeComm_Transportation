import { Request, Response } from "express";
import Session from "../models/session";
import { DecodedUser } from "../middlewares/auth";

interface AuthRequest extends Request {
  user?: DecodedUser;
}

export const createSession = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const { refreshToken, expiresAt } = req.body;

    const session = await Session.create({ userId, refreshToken, expiresAt });
    res.status(201).json({ success: true, data: session });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getUserSessions = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const sessions = await Session.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: sessions });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteSession = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const session = await Session.findOneAndDelete({
      _id: req.params.id,
      userId,
    });

    if (!session)
      return res
        .status(404)
        .json({ success: false, message: "Session not found" });

    res
      .status(200)
      .json({ success: true, message: "Session deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
