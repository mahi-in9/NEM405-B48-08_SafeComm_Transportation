import { Request, Response } from "express";
import { validationResult } from "express-validator";
import Report from "../models/Reports";
import { DecodedUser } from "../middlewares/auth";

interface AuthRequest extends Request {
  user?: DecodedUser;
}

export const createReport = async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const userId = req.user?.id;
  if (!userId)
    return res.status(401).json({ success: false, message: "Unauthorized" });

  const { routeId, vehicleId, location, description, severity } = req.body;

  const newReport = await Report.create({
    userId,
    routeId,
    vehicleId,
    location,
    description,
    severity,
  });

  res.status(201).json({ success: true, data: newReport });
};

export const getAllReports = async (_req: AuthRequest, res: Response) => {
  const reports = await Report.find()
    .populate("userId", "name email")
    .sort({ createdAt: -1 });

  res.status(200).json({ success: true, data: reports });
};
export const getReportById = async (req: AuthRequest, res: Response) => {
  const report = await Report.findById(req.params.id).populate(
    "userId",
    "name email",
  );

  if (!report)
    return res
      .status(404)
      .json({ success: false, message: "Report not found" });

  res.status(200).json({ success: true, data: report });
};

export const updateReport = async (req: AuthRequest, res: Response) => {
  const report = await Report.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!report)
    return res
      .status(404)
      .json({ success: false, message: "Report not found" });

  res.status(200).json({ success: true, data: report });
};

export const deleteReport = async (req: AuthRequest, res: Response) => {
  const report = await Report.findByIdAndDelete(req.params.id);

  if (!report)
    return res
      .status(404)
      .json({ success: false, message: "Report not found" });

  res
    .status(200)
    .json({ success: true, message: "Report deleted successfully" });
};
