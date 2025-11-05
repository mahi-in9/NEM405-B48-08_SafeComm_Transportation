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
const routeController_1 = require("../controllers/routeController");
const router = (0, express_1.Router)();
router.post(
  "/",
  auth_1.auth,
  (0, checkRole_1.default)(["admin"]),
  routeController_1.createRoute,
);
router.put(
  "/:id",
  auth_1.auth,
  (0, checkRole_1.default)(["admin"]),
  routeController_1.updateRoute,
);
router.delete(
  "/:id",
  auth_1.auth,
  (0, checkRole_1.default)(["admin"]),
  routeController_1.deleteRoute,
);
router.get("/", auth_1.auth, routeController_1.getAllRoutes);
router.get("/:id", auth_1.auth, routeController_1.getRouteById);
exports.default = router;
//# sourceMappingURL=routeRoutes.js.map
