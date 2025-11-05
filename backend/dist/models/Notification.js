"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const notificationSchema = new mongoose_1.Schema({
  userId: {
    type: mongoose_1.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: { type: String, required: true },
  type: {
    type: String,
    enum: ["safety_alert", "system", "admin"],
    default: "system",
  },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});
const Notification = (0, mongoose_1.model)("Notification", notificationSchema);
exports.default = Notification;
//# sourceMappingURL=Notification.js.map
