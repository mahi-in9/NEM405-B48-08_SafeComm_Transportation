"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const incidentSchema = new mongoose_1.Schema(
  {
    reportId: {
      type: mongoose_1.Schema.Types.ObjectId,
      ref: "Report",
      required: true,
    },
    verifiedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    resolutionNotes: { type: String },
    resolvedAt: { type: Date },
    status: {
      type: String,
      enum: ["open", "investigating", "resolved"],
      default: "open",
    },
  },
  { timestamps: true },
);
const Incident = (0, mongoose_1.model)("Incident", incidentSchema);
exports.default = Incident;
//# sourceMappingURL=Incident.js.map
