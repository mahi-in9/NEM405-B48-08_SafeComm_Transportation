import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "moderator" | "admin";
  createdAt: Date;
  lastActiveAt: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "moderator", "admin"], default: "user" },
  createdAt: { type: Date, default: Date.now },
  lastActiveAt: Date,
});

const User = model<IUser>("User", userSchema);

export default User;
