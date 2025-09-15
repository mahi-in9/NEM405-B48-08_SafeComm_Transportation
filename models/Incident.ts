import { Schema, model, Document, Types } from "mongoose";

interface IIncident extends Document {
  reportId: Types.ObjectId;
  verifiedBy?: Types.ObjectId;
  resolutionNotes?: string;
  resolvedAt?: Date;
  status: "open" | "investigating" | "resolved";
  createdAt: Date;
  updatedAt: Date;
}

const incidentSchema = new Schema<IIncident>(
  {
    reportId: { type: Schema.Types.ObjectId, ref: "Report", required: true },
    verifiedBy: { type: Schema.Types.ObjectId, ref: "User" },
    resolutionNotes: { type: String },
    resolvedAt: { type: Date },
    status: {
      type: String,
      enum: ["open", "investigating", "resolved"],
      default: "open",
    },
  },
  { timestamps: true }
);

const Incident = model<IIncident>("Incident", incidentSchema);

export default Incident;
