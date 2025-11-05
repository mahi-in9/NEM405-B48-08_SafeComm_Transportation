import { Document } from "mongoose";
interface ITransitETA extends Document {
  vehicleId: string;
  routeId: string;
  stopId: string;
  estimatedArrival: Date;
  createdAt: Date;
}
declare const TransitETA: import("mongoose").Model<
  ITransitETA,
  {},
  {},
  {},
  Document<unknown, {}, ITransitETA, {}, {}> &
    ITransitETA &
    Required<{
      _id: unknown;
    }> & {
      __v: number;
    },
  any
>;
export default TransitETA;
//# sourceMappingURL=ETA.d.ts.map
