"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const checkRole_1 = __importDefault(require("../middlewares/checkRole"));
const vehicleController_1 = require("../controllers/vehicleController");
const router = (0, express_1.Router)();
router.post(
  "/",
  auth_1.auth,
  (0, checkRole_1.default)(["admin"]),
  vehicleController_1.createVehicle,
);
router.get("/", auth_1.auth, vehicleController_1.getAllVehicles);
router.get("/:id", auth_1.auth, vehicleController_1.getVehicleById);
router.put(
  "/:id",
  auth_1.auth,
  (0, checkRole_1.default)(["admin"]),
  vehicleController_1.updateVehicle,
);
router.delete(
  "/:id",
  auth_1.auth,
  (0, checkRole_1.default)(["admin"]),
  vehicleController_1.deleteVehicle,
);
exports.default = router;
//# sourceMappingURL=vehicleRoutes.js.map
