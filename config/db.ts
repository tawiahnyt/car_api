/** @format */

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI as string
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error(`Unexpected error: ${error}`);
    }
    process.exit(1);
  }
};
