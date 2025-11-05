import { Request, Response } from "express";
import { DecodedUser } from "../middlewares/auth";
interface AuthRequest extends Request {
  user?: DecodedUser;
}
export declare const createVehicle: (
  req: AuthRequest,
  res: Response,
) => Promise<void>;
export declare const getAllVehicles: (
  _req: AuthRequest,
  res: Response,
) => Promise<void>;
export declare const getVehicleById: (
  req: AuthRequest,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateVehicle: (
  req: AuthRequest,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteVehicle: (
  req: AuthRequest,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=vehicleController.d.ts.map
