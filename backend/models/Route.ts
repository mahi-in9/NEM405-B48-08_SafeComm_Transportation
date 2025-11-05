import { Schema, model, Document } from "mongoose";

interface IStop {
  stopId: string;
  name: string;
  location: {
    type: "Point";
    coordinates: [number, number];
  };
}

interface IGeometry {
  type: "LineString";
  coordinates: [number, number][];
}

interface IRoute extends Document {
  routeId: string;
  name: string;
  stops: IStop[];
  geometry: IGeometry;
  active: boolean;
  createdAt: Date;
}

const routeSchema = new Schema<IRoute>({
  routeId: { type: String, required: true, index: true },
  name: { type: String, required: true },
  stops: [
    {
      stopId: { type: String, required: true },
      name: { type: String },
      location: {
        type: { type: String, enum: ["Point"], default: "Point" },
        coordinates: { type: [Number], required: true },
      },
    },
  ],
  geometry: {
    type: { type: String, enum: ["LineString"], default: "LineString" },
    coordinates: { type: [[Number]], required: true },
  },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

const Route = model<IRoute>("Route", routeSchema);

export default Route;
