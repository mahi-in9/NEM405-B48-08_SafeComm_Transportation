"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const transitETASchema = new mongoose_1.Schema({
    vehicleId: { type: String, required: true },
    routeId: { type: String, required: true },
    stopId: { type: String, required: true },
    estimatedArrival: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
});
const TransitETA = (0, mongoose_1.model)("TransitETA", transitETASchema);
exports.default = TransitETA;
//# sourceMappingURL=ETA.js.map