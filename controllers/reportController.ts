import { Request, Response } from "express";
import Report from "../models/Reports";
import { DecodedUser } from "../middlewares/auth";

interface AuthRequest extends Request {
  user?: DecodedUser;
}

export const createReport = async (req: AuthRequest, res: Response) => {
  try {
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
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllReports = async (req: AuthRequest, res: Response) => {
  try {
    const reports = await Report.find()
      .populate("userId", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: reports });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getReportById = async (req: AuthRequest, res: Response) => {
  try {
    const report = await Report.findById(req.params.id).populate(
      "userId",
      "name email"
    );

    if (!report)
      return res
        .status(404)
        .json({ success: false, message: "Report not found" });

    res.status(200).json({ success: true, data: report });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateReport = async (req: AuthRequest, res: Response) => {
  try {
    const userRole = req.user?.role;

    if (!["admin", "moderator"].includes(userRole || ""))
      return res.status(403).json({ success: false, message: "Forbidden" });

    const report = await Report.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!report)
      return res
        .status(404)
        .json({ success: false, message: "Report not found" });

    res.status(200).json({ success: true, data: report });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteReport = async (req: AuthRequest, res: Response) => {
  try {
    const userRole = req.user?.role;

    if (userRole !== "admin")
      return res.status(403).json({ success: false, message: "Forbidden" });

    const report = await Report.findByIdAndDelete(req.params.id);

    if (!report)
      return res
        .status(404)
        .json({ success: false, message: "Report not found" });

    res
      .status(200)
      .json({ success: true, message: "Report deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
