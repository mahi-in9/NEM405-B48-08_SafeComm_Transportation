import { Request, Response } from "express";
import Route from "../models/Route";
import { DecodedUser } from "../middlewares/auth";

interface AuthRequest extends Request {
  user?: DecodedUser;
}

export const createRoute = async (req: AuthRequest, res: Response) => {
  try {
    const route = await Route.create(req.body);
    res.status(201).json({ success: true, data: route });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllRoutes = async (_req: AuthRequest, res: Response) => {
  try {
    const routes = await Route.find();
    res.status(200).json({ success: true, data: routes });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getRouteById = async (req: AuthRequest, res: Response) => {
  try {
    const route = await Route.findById(req.params.id);
    if (!route) {
      return res
        .status(404)
        .json({ success: false, message: "Route not found" });
    }
    res.status(200).json({ success: true, data: route });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateRoute = async (req: AuthRequest, res: Response) => {
  try {
    const route = await Route.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!route) {
      return res
        .status(404)
        .json({ success: false, message: "Route not found" });
    }
    res.status(200).json({ success: true, data: route });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteRoute = async (req: AuthRequest, res: Response) => {
  try {
    const route = await Route.findByIdAndDelete(req.params.id);
    if (!route) {
      return res
        .status(404)
        .json({ success: false, message: "Route not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Route deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
