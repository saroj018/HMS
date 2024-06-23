import { Router } from "express";
import { addPatient } from "../controller/patientController.js";
import { addDoctor } from "../controller/doctorController.js";

export const patientRoute=Router()

patientRoute.route('/addpatient').post(addPatient)