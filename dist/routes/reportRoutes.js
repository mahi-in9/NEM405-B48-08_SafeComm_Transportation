"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../middlewares/auth");
const checkRole_1 = __importDefault(require("../middlewares/checkRole"));
const asyncHandler_1 = __importDefault(require("../middlewares/asyncHandler"));
const reportController_1 = require("../controllers/reportController");
const router = (0, express_1.Router)();
const reportValidation = [
    (0, express_validator_1.body)("routeId").notEmpty().withMessage("routeId is required"),
    (0, express_validator_1.body)("description").notEmpty().withMessage("description is required"),
    (0, express_validator_1.body)("location").notEmpty().withMessage("location is required"),
    (0, express_validator_1.body)("severity")
        .optional()
        .isIn(["low", "medium", "high"])
        .withMessage("Invalid severity value"),
];
router.post("/", auth_1.auth, reportValidation, (0, asyncHandler_1.default)(reportController_1.createReport));
router.get("/", auth_1.auth, (0, checkRole_1.default)(["admin", "moderator"]), (0, asyncHandler_1.default)(reportController_1.getAllReports));
router.get("/:id", auth_1.auth, (0, checkRole_1.default)(["admin", "moderator"]), (0, asyncHandler_1.default)(reportController_1.getReportById));
router.put("/:id", auth_1.auth, (0, checkRole_1.default)(["admin", "moderator"]), reportValidation, (0, asyncHandler_1.default)(reportController_1.updateReport));
router.delete("/:id", auth_1.auth, (0, checkRole_1.default)(["admin"]), (0, asyncHandler_1.default)(reportController_1.deleteReport));
exports.default = router;
//# sourceMappingURL=reportRoutes.js.map