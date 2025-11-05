"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const vehicleRoutes_1 = __importDefault(require("./routes/vehicleRoutes"));
const routeRoutes_1 = __importDefault(require("./routes/routeRoutes"));
const ratingRoutes_1 = __importDefault(require("./routes/ratingRoutes"));
const reportRoutes_1 = __importDefault(require("./routes/reportRoutes"));
const incidentRoutes_1 = __importDefault(require("./routes/incidentRoutes"));
const etaRoutes_1 = __importDefault(require("./routes/etaRoutes"));
const statsRoutes_1 = __importDefault(require("./routes/statsRoutes"));
const sessionRoutes_1 = __importDefault(require("./routes/sessionRoutes"));
const notificationRoutes_1 = __importDefault(
  require("./routes/notificationRoutes"),
);
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (_req, res) => {
  res.send("🚍 SafeComm Transportation Backend is running...");
});
app.use("/api/auth", authRoutes_1.default);
app.use("/api/vehicles", vehicleRoutes_1.default);
app.use("/api/routes", routeRoutes_1.default);
app.use("/api/ratings", ratingRoutes_1.default);
app.use("/api/reports", reportRoutes_1.default);
app.use("/api/incidents", incidentRoutes_1.default);
app.use("/api/eta", etaRoutes_1.default);
app.use("/api/stats", statsRoutes_1.default);
app.use("/api/sessions", sessionRoutes_1.default);
app.use("/api/notifications", notificationRoutes_1.default);
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ success: false, message: err.message || "Server Error" });
});
const PORT = process.env.PORT || 5000;
mongoose_1.default
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`),
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
//# sourceMappingURL=server.js.map
