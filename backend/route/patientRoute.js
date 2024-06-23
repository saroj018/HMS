import { Router } from "express";
import { addPatient, getAllPatients, patientLogin } from "../controller/patientController.js";
import {  patientAuth } from "../middleware/auth.js";

export const patientRoute=Router()

patientRoute.route('/addpatient').post(addPatient)
patientRoute.route('/getallpatient').get(patientAuth,getAllPatients)
patientRoute.route('/login').post(patientLogin)