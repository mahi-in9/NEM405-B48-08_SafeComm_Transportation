"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const User_1 = __importDefault(require("../models/User"));
const vehicles_1 = __importDefault(require("../models/vehicles"));
const Route_1 = __importDefault(require("../models/Route"));
const Reports_1 = __importDefault(require("../models/Reports"));
const Ratings_1 = __importDefault(require("../models/Ratings"));
const Incident_1 = __importDefault(require("../models/Incident"));
const getStats = async (req, res) => {
    try {
        const userRole = req.user?.role;
        if (userRole !== "admin") {
            return res.status(403).json({ success: false, message: "Forbidden" });
        }
        const totalUsers = await User_1.default.countDocuments();
        const totalVehicles = await vehicles_1.default.countDocuments();
        const totalRoutes = await Route_1.default.countDocuments();
        const totalReports = await Reports_1.default.countDocuments();
        const totalRatings = await Ratings_1.default.countDocuments();
        const totalIncidents = await Incident_1.default.countDocuments();
        res.status(200).json({
            success: true,
            data: {
                totalUsers,
                totalVehicles,
                totalRoutes,
                totalReports,
                totalRatings,
                totalIncidents,
            },
        });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getStats = getStats;
//# sourceMappingURL=statsController.js.map