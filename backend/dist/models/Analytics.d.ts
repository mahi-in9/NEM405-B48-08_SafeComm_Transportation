import { Document } from "mongoose";
interface IStats extends Document {
  type: "reports" | "ratings" | "vehicles" | "users";
  date: Date;
  count: number;
}
declare const Stats: import("mongoose").Model<
  IStats,
  {},
  {},
  {},
  Document<unknown, {}, IStats, {}, {}> &
    IStats &
    Required<{
      _id: unknown;
    }> & {
      __v: number;
    },
  any
>;
export default Stats;
//# sourceMappingURL=Analytics.d.ts.map
