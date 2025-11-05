"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const vehicleSchema = new mongoose_1.Schema(
  {
    vehicleId: { type: String, required: true, unique: true, index: true },
    routeId: { type: String, required: true },
    lastLocation: {
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
    lastSeenAt: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["in_service", "out_of_service"],
      default: "in_service",
    },
  },
  { timestamps: true },
);
vehicleSchema.index({ lastLocation: "2dsphere" });
const Vehicle = (0, mongoose_1.model)("Vehicle", vehicleSchema);
exports.default = Vehicle;
//# sourceMappingURL=vehicles.js.map
