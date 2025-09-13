const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  routeId: { type: String, required: true },

  rating: { type: Number, min: 1, max: 5, required: true },

  tags: [{ type: String }],

  comment: { type: String },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Rating", ratingSchema);
