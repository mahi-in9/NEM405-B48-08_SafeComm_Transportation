const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  vehicleId: { type: String, required: true, index: true },

  routeId: { type: String, required: true },

  lastLocation: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], required: true },
  },

  lastSeenAt: { type: Date, default: Date.now },

  status: {
    type: String,
    enum: ["in_service", "out_of_service"],
    default: "in_service",
  },
});

vehicleSchema.index({ lastLocation: "2dsphere" });

module.exports = mongoose.model("Vehicle", vehicleSchema);
