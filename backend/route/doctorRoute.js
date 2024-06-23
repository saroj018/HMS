import { Router } from "express";
import { addDoctor, getAllDoctors } from "../controller/doctorController.js";

export const doctorRoute=Router()

doctorRoute.route('/adddoctor').post(addDoctor)
doctorRoute.route('/getalldoctor').get(getAllDoctors)