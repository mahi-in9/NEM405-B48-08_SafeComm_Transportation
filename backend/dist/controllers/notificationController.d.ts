import { Request, Response } from "express";
import { DecodedUser } from "../middlewares/auth";
interface AuthRequest extends Request {
  user?: DecodedUser;
}
export declare const createNotification: (
  req: AuthRequest,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getUserNotifications: (
  req: AuthRequest,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllNotifications: (
  req: AuthRequest,
  res: Response,
) => Promise<void>;
export declare const deleteNotification: (
  req: AuthRequest,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=notificationController.d.ts.map
