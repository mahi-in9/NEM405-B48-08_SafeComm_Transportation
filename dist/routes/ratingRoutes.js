"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const ratingController_1 = require("../controllers/ratingController");
const router = (0, express_1.Router)();
router.post("/", auth_1.auth, ratingController_1.createRating);
router.get("/route/:routeId", auth_1.auth, ratingController_1.getRatingsByRoute);
router.get("/me", auth_1.auth, ratingController_1.getUserRatings);
router.put("/:id", auth_1.auth, ratingController_1.updateRating);
router.delete("/:id", auth_1.auth, ratingController_1.deleteRating);
exports.default = router;
//# sourceMappingURL=ratingRoutes.js.map