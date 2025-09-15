"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotification = exports.getAllNotifications = exports.getUserNotifications = exports.createNotification = void 0;
const Notification_1 = __importDefault(require("../models/Notification"));
const createNotification = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId)
            return res.status(401).json({ success: false, message: "Unauthorized" });
        const { title, message, type } = req.body;
        const notification = await Notification_1.default.create({
            userId,
            title,
            message,
            type,
        });
        res.status(201).json({ success: true, data: notification });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.createNotification = createNotification;
const getUserNotifications = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId)
            return res.status(401).json({ success: false, message: "Unauthorized" });
        const notifications = await Notification_1.default.find({ userId }).sort({
            createdAt: -1,
        });
        res.status(200).json({ success: true, data: notifications });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getUserNotifications = getUserNotifications;
const getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification_1.default.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: notifications });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getAllNotifications = getAllNotifications;
const deleteNotification = async (req, res) => {
    try {
        const notification = await Notification_1.default.findByIdAndDelete(req.params.id);
        if (!notification)
            return res
                .status(404)
                .json({ success: false, message: "Notification not found" });
        res
            .status(200)
            .json({ success: true, message: "Notification deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.deleteNotification = deleteNotification;
//# sourceMappingURL=notificationController.js.map