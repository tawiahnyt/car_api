/** @format */

import express, { Application } from "express";
import { connectionDB } from "./config/db";
import carRoutes from "./routes/cars.route";

const app: Application = express();

app.use(express.json());

app.use("/api/v1", carRoutes);

app.listen(3000, () => {
  connectionDB();
  console.log("Server is up and running on port 3000");
});
