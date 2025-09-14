import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "🚍 SafeComm Transportation API is running" });
});

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI as string;
    if (!mongoURI) {
      throw new Error("MONGO_URI not defined in environment variables");
    }

    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running on port ${PORT}`);
});
