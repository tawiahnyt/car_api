import mongoose from "mongoose";

const carsSchema = new mongoose.Schema({
  city_mpg: {
    type: Number,
  },
  class: {
    type: String,
  },
  combination_mpg: {
    type: Number,
  },
  cylinders: {
    type: Number,
  },
  displacement: {
    type: Number,
  },
  drive: {
    type: String,
  },
  fuel_type: {
    type: String,
  },
  highway_mpg: {
    type: Number,
  },
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  year: {
    type: Number,
  },
  transmission: {
    type: String,
  },
});

const Car = mongoose.model("Car", carsSchema);

export default Car;