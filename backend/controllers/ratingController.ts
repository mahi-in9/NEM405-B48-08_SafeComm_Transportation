import { Request, Response } from "express";
import Rating from "../models/Ratings";
import { DecodedUser } from "../middlewares/auth";

interface AuthRequest extends Request {
  user?: DecodedUser;
}

export const createRating = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const { routeId, rating, tags, comment } = req.body;

    const existing = await Rating.findOne({ userId, routeId });
    if (existing)
      return res
        .status(400)
        .json({ success: false, message: "You have already rated this route" });

    const newRating = await Rating.create({
      userId,
      routeId,
      rating,
      tags,
      comment,
    });

    res.status(201).json({ success: true, data: newRating });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getRatingsByRoute = async (req: AuthRequest, res: Response) => {
  try {
    const { routeId } = req.params;
    const ratings = await Rating.find({ routeId }).populate(
      "userId",
      "name email",
    );
    res.status(200).json({ success: true, data: ratings });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getUserRatings = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const ratings = await Rating.find({ userId }).populate("routeId", "name");
    res.status(200).json({ success: true, data: ratings });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateRating = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const rating = await Rating.findOneAndUpdate(
      { _id: req.params.id, userId },
      req.body,
      { new: true },
    );

    if (!rating)
      return res
        .status(404)
        .json({ success: false, message: "Rating not found" });

    res.status(200).json({ success: true, data: rating });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteRating = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const rating = await Rating.findOneAndDelete({
      _id: req.params.id,
      userId,
    });

    if (!rating)
      return res
        .status(404)
        .json({ success: false, message: "Rating not found" });

    res
      .status(200)
      .json({ success: true, message: "Rating deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
