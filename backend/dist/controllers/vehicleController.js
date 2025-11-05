"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVehicle =
  exports.updateVehicle =
  exports.getVehicleById =
  exports.getAllVehicles =
  exports.createVehicle =
    void 0;
const vehicles_1 = __importDefault(require("../models/vehicles"));
const createVehicle = async (req, res) => {
  try {
    const vehicle = await vehicles_1.default.create(req.body);
    res.status(201).json({ success: true, data: vehicle });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.createVehicle = createVehicle;
const getAllVehicles = async (_req, res) => {
  try {
    const vehicles = await vehicles_1.default.find();
    res.status(200).json({ success: true, data: vehicles });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.getAllVehicles = getAllVehicles;
const getVehicleById = async (req, res) => {
  try {
    const vehicle = await vehicles_1.default.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }
    res.status(200).json({ success: true, data: vehicle });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.getVehicleById = getVehicleById;
const updateVehicle = async (req, res) => {
  try {
    const vehicle = await vehicles_1.default.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }
    res.status(200).json({ success: true, data: vehicle });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.updateVehicle = updateVehicle;
const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await vehicles_1.default.findByIdAndDelete(req.params.id);
    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Vehicle deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.deleteVehicle = deleteVehicle;
//# sourceMappingURL=vehicleController.js.map
