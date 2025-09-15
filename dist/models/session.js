"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sessionSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    refreshToken: { type: String, required: true },
    expiresAt: { type: Date, required: true },
}, { timestamps: true });
const Session = (0, mongoose_1.model)("Session", sessionSchema);
exports.default = Session;
//# sourceMappingURL=session.js.map