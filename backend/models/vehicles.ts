import { Schema, model, Document } from "mongoose";

interface IVehicle extends Document {
  vehicleId: string;
  routeId: string;
  lastLocation: {
    type: "Point";
    coordinates: [number, number];
  };
  lastSeenAt: Date;
  status: "in_service" | "out_of_service";
  createdAt: Date;
  updatedAt: Date;
}

const vehicleSchema = new Schema<IVehicle>(
  {
    vehicleId: { type: String, required: true, unique: true, index: true },

    routeId: { type: String, required: true },

    lastLocation: {
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

const Vehicle = model<IVehicle>("Vehicle", vehicleSchema);
export default Vehicle;
