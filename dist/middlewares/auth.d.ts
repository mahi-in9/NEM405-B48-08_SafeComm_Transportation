import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
export interface DecodedUser extends JwtPayload {
    id: string;
    email: string;
    role: string;
}
declare module "express-serve-static-core" {
    interface Request {
        user?: DecodedUser;
    }
}
export declare const auth: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.d.ts.map