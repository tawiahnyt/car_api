/** @format */

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// const MongoDB_URI = process.env.MONGODB_URI;

export const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://tawiahin4k:PrOxyOs35MQBO2Ma@cluster0.7xoac.mongodb.net/cars?retryWrites=true&w=majority&appName=Cluster0`
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

// PrOxyOs35MQBO2Ma
// tawiahin4k;
// mongodb+srv://tawiahin4k:PrOxyOs35MQBO2Ma@cluster0.7xoac.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0