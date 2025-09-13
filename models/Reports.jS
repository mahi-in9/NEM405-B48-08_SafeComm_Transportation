const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  routeId: { type: String, required: true },

  vehicleId: { type: String },

  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], required: true },
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

  createdAt: { type: Date, default: Date.now },
});

reportSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Report", reportSchema);
