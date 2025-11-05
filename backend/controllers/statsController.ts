import { Request, Response } from "express";
import User from "../models/User";
import Vehicle from "../models/vehicles";
import Route from "../models/Route";
import Report from "../models/Reports";
import Rating from "../models/Ratings";
import Incident from "../models/Incident";
import { DecodedUser } from "../middlewares/auth";

interface AuthRequest extends Request {
  user?: DecodedUser;
}

export const getStats = async (req: AuthRequest, res: Response) => {
  try {
    const userRole = req.user?.role;
    if (userRole !== "admin") {
      return res.status(403).json({ success: false, message: "Forbidden" });
    }

    const totalUsers = await User.countDocuments();
    const totalVehicles = await Vehicle.countDocuments();
    const totalRoutes = await Route.countDocuments();
    const totalReports = await Report.countDocuments();
    const totalRatings = await Rating.countDocuments();
    const totalIncidents = await Incident.countDocuments();

    res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalVehicles,
        totalRoutes,
        totalReports,
        totalRatings,
        totalIncidents,
      },
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
