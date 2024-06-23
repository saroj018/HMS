import { Router } from "express";
import { addPatient, getAllPatients, patientLogin } from "../controller/patientController.js";

export const patientRoute=Router()

patientRoute.route('/addpatient').post(addPatient)
patientRoute.route('/getallpatient').get(getAllPatients)
patientRoute.route('/login').post(patientLogin)