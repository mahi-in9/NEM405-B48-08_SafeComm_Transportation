"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoute =
  exports.updateRoute =
  exports.getRouteById =
  exports.getAllRoutes =
  exports.createRoute =
    void 0;
const Route_1 = __importDefault(require("../models/Route"));
const createRoute = async (req, res) => {
  try {
    const route = await Route_1.default.create(req.body);
    res.status(201).json({ success: true, data: route });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.createRoute = createRoute;
const getAllRoutes = async (_req, res) => {
  try {
    const routes = await Route_1.default.find();
    res.status(200).json({ success: true, data: routes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.getAllRoutes = getAllRoutes;
const getRouteById = async (req, res) => {
  try {
    const route = await Route_1.default.findById(req.params.id);
    if (!route) {
      return res
        .status(404)
        .json({ success: false, message: "Route not found" });
    }
    res.status(200).json({ success: true, data: route });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.getRouteById = getRouteById;
const updateRoute = async (req, res) => {
  try {
    const route = await Route_1.default.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    if (!route) {
      return res
        .status(404)
        .json({ success: false, message: "Route not found" });
    }
    res.status(200).json({ success: true, data: route });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.updateRoute = updateRoute;
const deleteRoute = async (req, res) => {
  try {
    const route = await Route_1.default.findByIdAndDelete(req.params.id);
    if (!route) {
      return res
        .status(404)
        .json({ success: false, message: "Route not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Route deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.deleteRoute = deleteRoute;
//# sourceMappingURL=routeController.js.map
