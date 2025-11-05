import { Document, Types } from "mongoose";
interface INotification extends Document {
  userId: Types.ObjectId;
  message: string;
  type: "safety_alert" | "system" | "admin";
  read: boolean;
  createdAt: Date;
}
declare const Notification: import("mongoose").Model<
  INotification,
  {},
  {},
  {},
  Document<unknown, {}, INotification, {}, {}> &
    INotification &
    Required<{
      _id: unknown;
    }> & {
      __v: number;
    },
  any
>;
export default Notification;
//# sourceMappingURL=Notification.d.ts.map
