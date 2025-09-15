import { Request, Response, NextFunction } from "express";
interface RoleRequest extends Request {
    user?: {
        id: string;
        email: string;
        role: string;
    };
}
declare const checkRole: (allowedRoles: string[]) => (req: RoleRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default checkRole;
//# sourceMappingURL=checkRole.d.ts.map