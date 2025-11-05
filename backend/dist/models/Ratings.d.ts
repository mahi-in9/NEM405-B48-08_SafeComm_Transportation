import { Document, Types } from "mongoose";
interface IRating extends Document {
  userId: Types.ObjectId;
  routeId: Types.ObjectId | string;
  rating: number;
  tags: string[];
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
}
declare const Rating: import("mongoose").Model<
  IRating,
  {},
  {},
  {},
  Document<unknown, {}, IRating, {}, {}> &
    IRating &
    Required<{
      _id: unknown;
    }> & {
      __v: number;
    },
  any
>;
export default Rating;
//# sourceMappingURL=Ratings.d.ts.map
