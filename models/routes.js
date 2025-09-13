const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
  routeId: { type: String, required: true, index: true },
  name: { type: String, required: true },

  stops: [
    {
      stopId: { type: String, required: true },
      name: String,
      location: {
        type: { type: String, enum: ["Point"], default: "Point" },
        coordinates: { type: [Number], required: true },
      },
    },
  ],

  geometry: {
    type: { type: String, enum: ["LineString"], default: "LineString" },
    coordinates: [[Number]],
  },

  active: { type: Boolean, default: true },

  createdAt: { type: Date, default: Date.now },
});

routeSchema.index({ "stops.location": "2dsphere" });

module.exports = mongoose.model("Route", routeSchema);
