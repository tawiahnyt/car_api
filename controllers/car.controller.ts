/** @format */

import { Request, Response } from "express";
import Car from "../models/car.model";

export const getCars = async (req: Request, res: Response) => {
  try {
    // Extract query parameters and set default values if not provided
    const limit = parseInt(req.query.limit as string) || 10;
    const make = req.query.make as string | undefined;
    const model = req.query.model as string | undefined;
    const year = req.query.year || undefined;
    const fuel_type = req.query.fuel_type as string | undefined;

    // Build a dynamic query object based on the available parameters
    const query: any = {};

    if (make) query.make = make;
    if (model) query.model = model;
    if (year) query.year = year;
    if (fuel_type) query.fuel_type = fuel_type;

    // Fetch cars from the database based on the constructed query
    const cars = await Car.find(query).limit(limit);

    // Send the response
    res.status(200).json(cars);
  } catch (error) {
    // Handle errors
    error instanceof Error
      ? res.status(500).json({ success: false, message: error.message })
      : res.status(500).json({ success: false, message: "Unexpected error" });
  }
};
