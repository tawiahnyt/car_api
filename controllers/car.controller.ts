/** @format */

import { Request, Response } from "express";
import Car from "../models/car.model";

const toTitleCase = (str: string): string => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  
export const getCars = async (req: Request, res: Response) => {
  try {
    // Extract query parameters and set default values if not provided
    const limit = parseInt(req.query.limit as string) || 15;
    const make = req.query.make as string | undefined;
    const model = req.query.model as string | undefined;
    const year = req.query.year || undefined;
    const fuel_type = req.query.fuel_type as string | undefined;

    // Build a dynamic query object based on the available parameters
    const query: any = {};

    if (make) query.make1 = make.toLowerCase();
    if (model) query.model1 = model.toLowerCase();
    if (year) query.year = year;
    if (fuel_type) query.fuel_type1 = fuel_type.toLowerCase();

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
