import { Request, Response } from "express";
import { DecodedUser } from "../middlewares/auth";
interface AuthRequest extends Request {
  user?: DecodedUser;
}
export declare const getStats: (
  req: AuthRequest,
  res: Response,
) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=statsController.d.ts.map
