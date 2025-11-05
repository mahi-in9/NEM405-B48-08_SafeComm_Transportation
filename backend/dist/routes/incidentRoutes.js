"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../middlewares/auth");
const checkRole_1 = __importDefault(require("../middlewares/checkRole"));
const asyncHandler_1 = __importDefault(require("../middlewares/asyncHandler"));
const incidentController_1 = require("../controllers/incidentController");
const router = (0, express_1.Router)();
const incidentValidation = [
  (0, express_validator_1.body)("title")
    .notEmpty()
    .withMessage("Title is required"),
  (0, express_validator_1.body)("description")
    .notEmpty()
    .withMessage("Description is required"),
  (0, express_validator_1.body)("location")
    .notEmpty()
    .withMessage("Location is required"),
  (0, express_validator_1.body)("severity")
    .optional()
    .isIn(["low", "medium", "high"])
    .withMessage("Invalid severity"),
];
router.post(
  "/",
  auth_1.auth,
  (0, checkRole_1.default)(["admin", "moderator"]),
  incidentValidation,
  (0, asyncHandler_1.default)(incidentController_1.createIncident),
);
router.get(
  "/",
  auth_1.auth,
  (0, checkRole_1.default)(["admin", "moderator"]),
  (0, asyncHandler_1.default)(incidentController_1.getAllIncidents),
);
router.get(
  "/:id",
  auth_1.auth,
  (0, checkRole_1.default)(["admin", "moderator"]),
  (0, asyncHandler_1.default)(incidentController_1.getIncidentById),
);
router.put(
  "/:id",
  auth_1.auth,
  (0, checkRole_1.default)(["admin", "moderator"]),
  incidentValidation,
  (0, asyncHandler_1.default)(incidentController_1.updateIncident),
);
router.delete(
  "/:id",
  auth_1.auth,
  (0, checkRole_1.default)(["admin"]),
  (0, asyncHandler_1.default)(incidentController_1.deleteIncident),
);
exports.default = router;
//# sourceMappingURL=incidentRoutes.js.map
