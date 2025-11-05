import { Schema, model, Document, Types } from "mongoose";

interface INotification extends Document {
  userId: Types.ObjectId;
  message: string;
  type: "safety_alert" | "system" | "admin";
  read: boolean;
  createdAt: Date;
}

const notificationSchema = new Schema<INotification>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  type: {
    type: String,
    enum: ["safety_alert", "system", "admin"],
    default: "system",
  },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Notification = model<INotification>("Notification", notificationSchema);

export default Notification;
