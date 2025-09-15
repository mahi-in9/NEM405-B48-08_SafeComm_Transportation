import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// Routes
import authRoutes from "./routes/authRoutes";
import vehicleRoutes from "./routes/vehicleRoutes";
import routeRoutes from "./routes/routeRoutes";
import ratingRoutes from "./routes/ratingRoutes";
import reportRoutes from "./routes/reportRoutes";
import notificationRoutes from "./routes/notificationRoutes";
import incidentRoutes from "./routes/incidentRoutes";
import etaRoutes from "./routes/etaRoutes";
import statsRoutes from "./routes/statsRoutes";
import sessionRoutes from "./routes/sessionRoutes";

dotenv.config();

const app: Application = express();

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));

// --- ROUTES ---
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/routes", routeRoutes);
app.use("/api/ratings", ratingRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/incidents", incidentRoutes);
app.use("/api/eta", etaRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/sessions", sessionRoutes);

// --- DEFAULT ROUTE ---
app.get("/", (_req: Request, res: Response) => {
  res.send("🚍 SafeComm Transportation Backend is running...");
});

// --- GLOBAL ERROR HANDLER ---
app.use((err: any, _req: Request, res: Response, _next: any) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ success: false, message: err.message || "Server error" });
});

// --- CONNECT MONGODB AND START SERVER ---
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
