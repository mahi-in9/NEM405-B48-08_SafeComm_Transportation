import { Request, Response } from "express";
import Vehicle from "../models/vehicles";
import { DecodedUser } from "../middlewares/auth";

interface AuthRequest extends Request {
  user?: DecodedUser;
}

export const createVehicle = async (req: AuthRequest, res: Response) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json({ success: true, data: vehicle });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllVehicles = async (_req: AuthRequest, res: Response) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json({ success: true, data: vehicles });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getVehicleById = async (req: AuthRequest, res: Response) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }
    res.status(200).json({ success: true, data: vehicle });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateVehicle = async (req: AuthRequest, res: Response) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }

    res.status(200).json({ success: true, data: vehicle });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
export const deleteVehicle = async (req: AuthRequest, res: Response) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Vehicle deleted successfully",
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
