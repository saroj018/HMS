import { Router } from "express";
import { addPatient, getAllPatients } from "../controller/patientController.js";

export const patientRoute=Router()

patientRoute.route('/addpatient').post(addPatient)
patientRoute.route('/getallpatient').get(getAllPatients)