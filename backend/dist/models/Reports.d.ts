import { Document, Types } from "mongoose";
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
declare const Report: import("mongoose").Model<
  IReport,
  {},
  {},
  {},
  Document<unknown, {}, IReport, {}, {}> &
    IReport &
    Required<{
      _id: unknown;
    }> & {
      __v: number;
    },
  any
>;
export default Report;
//# sourceMappingURL=Reports.d.ts.map
