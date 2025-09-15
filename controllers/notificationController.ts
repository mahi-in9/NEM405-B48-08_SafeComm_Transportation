import { Request, Response } from "express";
import Notification from "../models/Notification";
import { DecodedUser } from "../middlewares/auth";

interface AuthRequest extends Request {
  user?: DecodedUser;
}

export const createNotification = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const { title, message, type } = req.body;

    const notification = await Notification.create({
      userId,
      title,
      message,
      type,
    });

    res.status(201).json({ success: true, data: notification });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getUserNotifications = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const notifications = await Notification.find({ userId }).sort({
      createdAt: -1,
    });

    res.status(200).json({ success: true, data: notifications });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllNotifications = async (req: AuthRequest, res: Response) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: notifications });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteNotification = async (req: AuthRequest, res: Response) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);

    if (!notification)
      return res
        .status(404)
        .json({ success: false, message: "Notification not found" });

    res
      .status(200)
      .json({ success: true, message: "Notification deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
