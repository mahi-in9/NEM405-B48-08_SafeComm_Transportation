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
const asyncHandler_1 = __importDefault(require("../middlewares/asyncHandler"));
const statsController_1 = require("../controllers/statsController");
const router = (0, express_1.Router)();
router.get(
  "/",
  auth_1.auth,
  (0, checkRole_1.default)(["admin"]),
  (0, asyncHandler_1.default)(statsController_1.getStats),
);
exports.default = router;
//# sourceMappingURL=statsRoutes.js.map
