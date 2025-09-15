"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteETA = exports.updateETA = exports.getETAByRoute = exports.getAllETAs = exports.createETA = void 0;
const express_validator_1 = require("express-validator");
const ETA_1 = __importDefault(require("../models/ETA"));
const createETA = async (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty())
        return res.status(400).json({ success: false, errors: errors.array() });
    const { routeId, vehicleId, etaTime } = req.body;
    const newETA = await ETA_1.default.create({
        routeId,
        vehicleId,
        etaTime,
        createdBy: req.user?.id,
    });
    res.status(201).json({ success: true, data: newETA });
};
exports.createETA = createETA;
const getAllETAs = async (_req, res) => {
    const etas = await ETA_1.default.find()
        .populate("routeId", "name startPoint endPoint")
        .populate("vehicleId", "vehicleNumber type")
        .sort({ etaTime: 1 });
    res.status(200).json({ success: true, data: etas });
};
exports.getAllETAs = getAllETAs;
const getETAByRoute = async (req, res) => {
    const etas = await ETA_1.default.find({ routeId: req.params.routeId })
        .populate("routeId", "name startPoint endPoint")
        .populate("vehicleId", "vehicleNumber type")
        .sort({ etaTime: 1 });
    if (!etas.length)
        return res
            .status(404)
            .json({ success: false, message: "No ETA found for this route" });
    res.status(200).json({ success: true, data: etas });
};
exports.getETAByRoute = getETAByRoute;
const updateETA = async (req, res) => {
    const eta = await ETA_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!eta)
        return res.status(404).json({ success: false, message: "ETA not found" });
    res.status(200).json({ success: true, data: eta });
};
exports.updateETA = updateETA;
const deleteETA = async (req, res) => {
    const eta = await ETA_1.default.findByIdAndDelete(req.params.id);
    if (!eta)
        return res.status(404).json({ success: false, message: "ETA not found" });
    res.status(200).json({ success: true, message: "ETA deleted successfully" });
};
exports.deleteETA = deleteETA;
//# sourceMappingURL=etaController.js.map