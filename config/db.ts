/** @format */

import mongoose from "mongoose";

export const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/cars`);
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
