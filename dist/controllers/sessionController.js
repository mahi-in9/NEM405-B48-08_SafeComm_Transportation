"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSession = exports.getUserSessions = exports.createSession = void 0;
const session_1 = __importDefault(require("../models/session"));
const createSession = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId)
            return res.status(401).json({ message: "Unauthorized" });
        const { refreshToken, expiresAt } = req.body;
        const session = await session_1.default.create({ userId, refreshToken, expiresAt });
        res.status(201).json({ success: true, data: session });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.createSession = createSession;
const getUserSessions = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId)
            return res.status(401).json({ message: "Unauthorized" });
        const sessions = await session_1.default.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: sessions });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getUserSessions = getUserSessions;
const deleteSession = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId)
            return res.status(401).json({ message: "Unauthorized" });
        const session = await session_1.default.findOneAndDelete({
            _id: req.params.id,
            userId,
        });
        if (!session)
            return res
                .status(404)
                .json({ success: false, message: "Session not found" });
        res
            .status(200)
            .json({ success: true, message: "Session deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.deleteSession = deleteSession;
//# sourceMappingURL=sessionController.js.map