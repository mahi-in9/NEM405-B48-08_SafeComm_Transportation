"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReport =
  exports.updateReport =
  exports.getReportById =
  exports.getAllReports =
  exports.createReport =
    void 0;
const express_validator_1 = require("express-validator");
const Reports_1 = __importDefault(require("../models/Reports"));
const createReport = async (req, res) => {
  const errors = (0, express_validator_1.validationResult)(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  const userId = req.user?.id;
  if (!userId)
    return res.status(401).json({ success: false, message: "Unauthorized" });
  const { routeId, vehicleId, location, description, severity } = req.body;
  const newReport = await Reports_1.default.create({
    userId,
    routeId,
    vehicleId,
    location,
    description,
    severity,
  });
  res.status(201).json({ success: true, data: newReport });
};
exports.createReport = createReport;
const getAllReports = async (_req, res) => {
  const reports = await Reports_1.default
    .find()
    .populate("userId", "name email")
    .sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: reports });
};
exports.getAllReports = getAllReports;
const getReportById = async (req, res) => {
  const report = await Reports_1.default
    .findById(req.params.id)
    .populate("userId", "name email");
  if (!report)
    return res
      .status(404)
      .json({ success: false, message: "Report not found" });
  res.status(200).json({ success: true, data: report });
};
exports.getReportById = getReportById;
const updateReport = async (req, res) => {
  const report = await Reports_1.default.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
  );
  if (!report)
    return res
      .status(404)
      .json({ success: false, message: "Report not found" });
  res.status(200).json({ success: true, data: report });
};
exports.updateReport = updateReport;
const deleteReport = async (req, res) => {
  const report = await Reports_1.default.findByIdAndDelete(req.params.id);
  if (!report)
    return res
      .status(404)
      .json({ success: false, message: "Report not found" });
  res
    .status(200)
    .json({ success: true, message: "Report deleted successfully" });
};
exports.deleteReport = deleteReport;
//# sourceMappingURL=reportController.js.map
