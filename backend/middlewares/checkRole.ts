import { Request, Response, NextFunction } from "express";

// Make sure this matches the extended req.user from auth.ts
interface RoleRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

const checkRole = (allowedRoles: string[]) => {
  return (req: RoleRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: insufficient role" });
    }

    next();
  };
};

export default checkRole;
