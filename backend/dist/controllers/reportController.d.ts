import { Request, Response } from "express";
import { DecodedUser } from "../middlewares/auth";
interface AuthRequest extends Request {
  user?: DecodedUser;
}
export declare const createReport: (
  req: AuthRequest,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllReports: (
  _req: AuthRequest,
  res: Response,
) => Promise<void>;
export declare const getReportById: (
  req: AuthRequest,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateReport: (
  req: AuthRequest,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteReport: (
  req: AuthRequest,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=reportController.d.ts.map
