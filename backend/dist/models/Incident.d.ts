import { Document, Types } from "mongoose";
interface IIncident extends Document {
  reportId: Types.ObjectId;
  verifiedBy?: Types.ObjectId;
  resolutionNotes?: string;
  resolvedAt?: Date;
  status: "open" | "investigating" | "resolved";
  createdAt: Date;
  updatedAt: Date;
}
declare const Incident: import("mongoose").Model<
  IIncident,
  {},
  {},
  {},
  Document<unknown, {}, IIncident, {}, {}> &
    IIncident &
    Required<{
      _id: unknown;
    }> & {
      __v: number;
    },
  any
>;
export default Incident;
//# sourceMappingURL=Incident.d.ts.map
