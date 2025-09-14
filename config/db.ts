import mongoose, { connect } from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI as string;

    if (!mongoURI)
      throw new Error("mongoURI is not defined in environment variables");

    await connect(mongoURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("mongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
