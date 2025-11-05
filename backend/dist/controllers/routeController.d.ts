import { Request, Response } from "express";
import { DecodedUser } from "../middlewares/auth";
interface AuthRequest extends Request {
  user?: DecodedUser;
}
export declare const createRoute: (
  req: AuthRequest,
  res: Response,
) => Promise<void>;
export declare const getAllRoutes: (
  _req: AuthRequest,
  res: Response,
) => Promise<void>;
export declare const getRouteById: (
  req: AuthRequest,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateRoute: (
  req: AuthRequest,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteRoute: (
  req: AuthRequest,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=routeController.d.ts.map
