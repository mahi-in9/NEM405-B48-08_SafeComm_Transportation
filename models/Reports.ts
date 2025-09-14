import { Schema, model, Document, Types } from "mongoose";

interface IReport extends Document {
  userId: Types.ObjectId;
  routeId: string;
  vehicleId?: string;
  location: {
    type: "Point";
    coordinates: [number, number];
  };
  description: string;
  severity: "low" | "medium" | "high";
  status: "open" | "investigating" | "resolved";
  createdAt: Date;
  updatedAt: Date;
}

const reportSchema = new Schema<IReport>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },

    routeId: { type: String, required: true },

    vehicleId: { type: String },

    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: {
        type: [Number],
        required: true,
        validate: {
          validator: (val: number[]) => val.length === 2,
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
  },
  { timestamps: true }
);

reportSchema.index({ location: "2dsphere" });

const Report = model<IReport>("Report", reportSchema);

export default Report;
