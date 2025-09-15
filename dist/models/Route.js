"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const routeSchema = new mongoose_1.Schema({
    routeId: { type: String, required: true, index: true },
    name: { type: String, required: true },
    stops: [
        {
            stopId: { type: String, required: true },
            name: { type: String },
            location: {
                type: { type: String, enum: ["Point"], default: "Point" },
                coordinates: { type: [Number], required: true },
            },
        },
    ],
    geometry: {
        type: { type: String, enum: ["LineString"], default: "LineString" },
        coordinates: { type: [[Number]], required: true },
    },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
});
const Route = (0, mongoose_1.model)("Route", routeSchema);
exports.default = Route;
//# sourceMappingURL=Route.js.map