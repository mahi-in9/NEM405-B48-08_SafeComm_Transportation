import { Schema, model, Document, Types } from "mongoose";

interface ISession extends Document {
  userId: Types.ObjectId;
  refreshToken: string;
  createdAt: Date;
  expiresAt: Date;
}

const sessionSchema = new Schema<ISession>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  refreshToken: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true },
});

const Session = model<ISession>("Session", sessionSchema);

export default Session;
