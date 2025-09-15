"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ratingSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    routeId: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    tags: [{ type: String }],
    comment: { type: String },
}, { timestamps: true });
ratingSchema.index({ routeId: 1 });
ratingSchema.index({ userId: 1, routeId: 1 }, { unique: true });
const Rating = (0, mongoose_1.model)("Rating", ratingSchema);
exports.default = Rating;
//# sourceMappingURL=Ratings.js.map