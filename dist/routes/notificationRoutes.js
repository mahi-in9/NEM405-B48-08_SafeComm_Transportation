"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const checkRole_1 = __importDefault(require("../middlewares/checkRole"));
const notificationController_1 = require("../controllers/notificationController");
const router = (0, express_1.Router)();
router.post("/", auth_1.auth, notificationController_1.createNotification);
router.get("/", auth_1.auth, notificationController_1.getUserNotifications);
router.get("/all", auth_1.auth, (0, checkRole_1.default)(["admin"]), notificationController_1.getAllNotifications);
router.delete("/:id", auth_1.auth, (0, checkRole_1.default)(["admin"]), notificationController_1.deleteNotification);
exports.default = router;
//# sourceMappingURL=notificationRoutes.js.map