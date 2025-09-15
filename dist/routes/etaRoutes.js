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
const etaController_1 = require("../controllers/etaController");
const router = (0, express_1.Router)();
const etaValidation = [
    (0, express_validator_1.body)("routeId").notEmpty().withMessage("Route ID is required"),
    (0, express_validator_1.body)("vehicleId").notEmpty().withMessage("Vehicle ID is required"),
    (0, express_validator_1.body)("etaTime").notEmpty().withMessage("ETA time is required"),
];
router.post("/", auth_1.auth, (0, checkRole_1.default)(["admin"]), etaValidation, (0, asyncHandler_1.default)(etaController_1.createETA));
router.get("/", auth_1.auth, (0, checkRole_1.default)(["admin"]), (0, asyncHandler_1.default)(etaController_1.getAllETAs));
router.get("/route/:routeId", auth_1.auth, (0, asyncHandler_1.default)(etaController_1.getETAByRoute));
router.put("/:id", auth_1.auth, (0, checkRole_1.default)(["admin"]), etaValidation, (0, asyncHandler_1.default)(etaController_1.updateETA));
router.delete("/:id", auth_1.auth, (0, checkRole_1.default)(["admin"]), (0, asyncHandler_1.default)(etaController_1.deleteETA));
exports.default = router;
//# sourceMappingURL=etaRoutes.js.map