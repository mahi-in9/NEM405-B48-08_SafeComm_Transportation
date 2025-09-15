"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRating = exports.updateRating = exports.getUserRatings = exports.getRatingsByRoute = exports.createRating = void 0;
const Ratings_1 = __importDefault(require("../models/Ratings"));
const createRating = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId)
            return res.status(401).json({ success: false, message: "Unauthorized" });
        const { routeId, rating, tags, comment } = req.body;
        const existing = await Ratings_1.default.findOne({ userId, routeId });
        if (existing)
            return res
                .status(400)
                .json({ success: false, message: "You have already rated this route" });
        const newRating = await Ratings_1.default.create({
            userId,
            routeId,
            rating,
            tags,
            comment,
        });
        res.status(201).json({ success: true, data: newRating });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.createRating = createRating;
const getRatingsByRoute = async (req, res) => {
    try {
        const { routeId } = req.params;
        const ratings = await Ratings_1.default.find({ routeId }).populate("userId", "name email");
        res.status(200).json({ success: true, data: ratings });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getRatingsByRoute = getRatingsByRoute;
const getUserRatings = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId)
            return res.status(401).json({ success: false, message: "Unauthorized" });
        const ratings = await Ratings_1.default.find({ userId }).populate("routeId", "name");
        res.status(200).json({ success: true, data: ratings });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getUserRatings = getUserRatings;
const updateRating = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId)
            return res.status(401).json({ success: false, message: "Unauthorized" });
        const rating = await Ratings_1.default.findOneAndUpdate({ _id: req.params.id, userId }, req.body, { new: true });
        if (!rating)
            return res
                .status(404)
                .json({ success: false, message: "Rating not found" });
        res.status(200).json({ success: true, data: rating });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.updateRating = updateRating;
const deleteRating = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId)
            return res.status(401).json({ success: false, message: "Unauthorized" });
        const rating = await Ratings_1.default.findOneAndDelete({
            _id: req.params.id,
            userId,
        });
        if (!rating)
            return res
                .status(404)
                .json({ success: false, message: "Rating not found" });
        res
            .status(200)
            .json({ success: true, message: "Rating deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.deleteRating = deleteRating;
//# sourceMappingURL=ratingController.js.map