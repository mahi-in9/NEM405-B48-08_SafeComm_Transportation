import { Schema, model, Document } from "mongoose";

interface ITransitETA extends Document {
  vehicleId: string;
  routeId: string;
  stopId: string;
  estimatedArrival: Date;
  createdAt: Date;
}

const transitETASchema = new Schema<ITransitETA>({
  vehicleId: { type: String, required: true },
  routeId: { type: String, required: true },
  stopId: { type: String, required: true },
  estimatedArrival: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

const TransitETA = model<ITransitETA>("TransitETA", transitETASchema);

export default TransitETA;
