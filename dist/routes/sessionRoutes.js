"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const asyncHandler_1 = __importDefault(require("../middlewares/asyncHandler"));
const sessionController_1 = require("../controllers/sessionController");
const router = (0, express_1.Router)();
router.post("/", auth_1.auth, (0, asyncHandler_1.default)(sessionController_1.createSession));
router.get("/", auth_1.auth, (0, asyncHandler_1.default)(sessionController_1.getUserSessions));
router.delete("/:id", auth_1.auth, (0, asyncHandler_1.default)(sessionController_1.deleteSession));
exports.default = router;
//# sourceMappingURL=sessionRoutes.js.map