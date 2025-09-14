import { Schema, model, Document, Types } from "mongoose";

interface IRating extends Document {
  userId: Types.ObjectId;
  routeId: Types.ObjectId | string;
  rating: number;
  tags: string[];
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ratingSchema = new Schema<IRating>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    routeId: { type: String, required: true },

    rating: { type: Number, min: 1, max: 5, required: true },

    tags: [{ type: String }],

    comment: { type: String },
  },
  { timestamps: true }
);
ratingSchema.index({ routeId: 1 });
ratingSchema.index({ userId: 1, routeId: 1 }, { unique: true });

const Rating = model<IRating>("Rating", ratingSchema);

export default Rating;
