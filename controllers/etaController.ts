import { Request, Response } from "express";
import { validationResult } from "express-validator";
import TransitETA from "../models/ETA";
import { DecodedUser } from "../middlewares/auth";

interface AuthRequest extends Request {
  user?: DecodedUser;
}

export const createETA = async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ success: false, errors: errors.array() });

  const { routeId, vehicleId, etaTime } = req.body;

  const newETA = await TransitETA.create({
    routeId,
    vehicleId,
    etaTime,
    createdBy: req.user?.id,
  });

  res.status(201).json({ success: true, data: newETA });
};

export const getAllETAs = async (_req: AuthRequest, res: Response) => {
  const etas = await TransitETA.find()
    .populate("routeId", "name startPoint endPoint")
    .populate("vehicleId", "vehicleNumber type")
    .sort({ etaTime: 1 });

  res.status(200).json({ success: true, data: etas });
};

export const getETAByRoute = async (req: AuthRequest, res: Response) => {
  const etas = await TransitETA.find({ routeId: req.params.routeId })
    .populate("routeId", "name startPoint endPoint")
    .populate("vehicleId", "vehicleNumber type")
    .sort({ etaTime: 1 });

  if (!etas.length)
    return res
      .status(404)
      .json({ success: false, message: "No ETA found for this route" });

  res.status(200).json({ success: true, data: etas });
};

export const updateETA = async (req: AuthRequest, res: Response) => {
  const eta = await TransitETA.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!eta)
    return res.status(404).json({ success: false, message: "ETA not found" });

  res.status(200).json({ success: true, data: eta });
};

export const deleteETA = async (req: AuthRequest, res: Response) => {
  const eta = await TransitETA.findByIdAndDelete(req.params.id);

  if (!eta)
    return res.status(404).json({ success: false, message: "ETA not found" });

  res.status(200).json({ success: true, message: "ETA deleted successfully" });
};
