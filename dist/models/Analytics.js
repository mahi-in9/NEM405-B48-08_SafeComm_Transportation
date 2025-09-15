"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const statsSchema = new mongoose_1.Schema({
    type: {
        type: String,
        enum: ["reports", "ratings", "vehicles", "users"],
        required: true,
    },
    date: { type: Date, required: true },
    count: { type: Number, required: true },
});
const Stats = (0, mongoose_1.model)("Stats", statsSchema);
exports.default = Stats;
//# sourceMappingURL=Analytics.js.map