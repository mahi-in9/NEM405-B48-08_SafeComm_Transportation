import { Schema, model, Document } from "mongoose";

interface IStats extends Document {
  type: "reports" | "ratings" | "vehicles" | "users";
  date: Date;
  count: number;
}

const statsSchema = new Schema<IStats>({
  type: {
    type: String,
    enum: ["reports", "ratings", "vehicles", "users"],
    required: true,
  },
  date: { type: Date, required: true },
  count: { type: Number, required: true },
});

const Stats = model<IStats>("Stats", statsSchema);

export default Stats;
