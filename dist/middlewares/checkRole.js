"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkRole = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden: insufficient role" });
        }
        next();
    };
};
exports.default = checkRole;
//# sourceMappingURL=checkRole.js.map