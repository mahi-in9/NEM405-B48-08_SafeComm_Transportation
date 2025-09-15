"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reportSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    routeId: { type: String, required: true },
    vehicleId: { type: String },
    location: {
        type: { type: String, enum: ["Point"], default: "Point" },
        coordinates: {
            type: [Number],
            required: true,
            validate: {
                validator: (val) => val.length === 2,
                message: "Coordinates must be [longitude, latitude]",
            },
        },
    },
    description: { type: String, required: true },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "low",
    },
    status: {
        type: String,
        enum: ["open", "investigating", "resolved"],
        default: "open",
    },
}, { timestamps: true });
reportSchema.index({ location: "2dsphere" });
const Report = (0, mongoose_1.model)("Report", reportSchema);
exports.default = Report;
//# sourceMappingURL=Reports.js.map