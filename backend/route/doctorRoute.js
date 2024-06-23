import { Router } from "express";
import { addDoctor } from "../controller/doctorController.js";

export const doctorRoute=Router()

doctorRoute.route('/adddoctor').post(addDoctor)