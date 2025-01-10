/** @format */

import { Router } from "express";
import { getCars } from "../controllers/car.controller";


const router: Router = Router();

router.get("/cars/", getCars);

export default router;