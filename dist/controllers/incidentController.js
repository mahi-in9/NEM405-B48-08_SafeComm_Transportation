"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteIncident = exports.updateIncident = exports.getIncidentById = exports.getAllIncidents = exports.createIncident = void 0;
const express_validator_1 = require("express-validator");
const Incident_1 = __importDefault(require("../models/Incident"));
const createIncident = async (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }
    const { title, description, location, severity, vehicleId, routeId } = req.body;
    const newIncident = await Incident_1.default.create({
        title,
        description,
        location,
        severity,
        vehicleId,
        routeId,
        reportedBy: req.user?.id,
    });
    res.status(201).json({ success: true, data: newIncident });
};
exports.createIncident = createIncident;
const getAllIncidents = async (_req, res) => {
    const incidents = await Incident_1.default.find()
        .populate("reportedBy", "name email")
        .sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: incidents });
};
exports.getAllIncidents = getAllIncidents;
const getIncidentById = async (req, res) => {
    const incident = await Incident_1.default.findById(req.params.id).populate("reportedBy", "name email");
    if (!incident)
        return res
            .status(404)
            .json({ success: false, message: "Incident not found" });
    res.status(200).json({ success: true, data: incident });
};
exports.getIncidentById = getIncidentById;
const updateIncident = async (req, res) => {
    const incident = await Incident_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!incident)
        return res
            .status(404)
            .json({ success: false, message: "Incident not found" });
    res.status(200).json({ success: true, data: incident });
};
exports.updateIncident = updateIncident;
const deleteIncident = async (req, res) => {
    const incident = await Incident_1.default.findByIdAndDelete(req.params.id);
    if (!incident)
        return res
            .status(404)
            .json({ success: false, message: "Incident not found" });
    res
        .status(200)
        .json({ success: true, message: "Incident deleted successfully" });
};
exports.deleteIncident = deleteIncident;
//# sourceMappingURL=incidentController.js.map