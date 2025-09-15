"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI)
            throw new Error("mongoURI is not defined in environment variables");
        await (0, mongoose_1.connect)(mongoURI);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.log("mongoDB connection error:", error);
        process.exit(1);
    }
};
exports.default = connectDB;
//# sourceMappingURL=db.js.map