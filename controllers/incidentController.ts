import { Request, Response } from "express";
import { validationResult } from "express-validator";
import Incident from "../models/Incident";
import { DecodedUser } from "../middlewares/auth";

interface AuthRequest extends Request {
  user?: DecodedUser;
}

export const createIncident = async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { title, description, location, severity, vehicleId, routeId } =
    req.body;

  const newIncident = await Incident.create({
    title,
    description,
    location,
    severity,
    vehicleId,
    routeId,
    reportedBy: req.user?.id,
  });

  res.status(201).json({ success: true, data: newIncident });
};

export const getAllIncidents = async (_req: AuthRequest, res: Response) => {
  const incidents = await Incident.find()
    .populate("reportedBy", "name email")
    .sort({ createdAt: -1 });

  res.status(200).json({ success: true, data: incidents });
};

export const getIncidentById = async (req: AuthRequest, res: Response) => {
  const incident = await Incident.findById(req.params.id).populate(
    "reportedBy",
    "name email"
  );

  if (!incident)
    return res
      .status(404)
      .json({ success: false, message: "Incident not found" });

  res.status(200).json({ success: true, data: incident });
};

export const updateIncident = async (req: AuthRequest, res: Response) => {
  const incident = await Incident.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!incident)
    return res
      .status(404)
      .json({ success: false, message: "Incident not found" });

  res.status(200).json({ success: true, data: incident });
};

export const deleteIncident = async (req: AuthRequest, res: Response) => {
  const incident = await Incident.findByIdAndDelete(req.params.id);

  if (!incident)
    return res
      .status(404)
      .json({ success: false, message: "Incident not found" });

  res
    .status(200)
    .json({ success: true, message: "Incident deleted successfully" });
};
