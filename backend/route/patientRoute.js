import { Router } from "express";
import { addPatient, deletePatient, getAllPatients, getSinglePatient, patientLogin, updatePatient } from "../controller/patientController.js";
import {  patientAuth } from "../middleware/auth.js";

export const patientRoute=Router()

patientRoute.route('/addpatient').post(addPatient)
patientRoute.route('/getallpatient').get(patientAuth,getAllPatients)
patientRoute.route('/login').post(patientLogin)
patientRoute.route('/getsinglepatient').get(getSinglePatient)
patientRoute.route('/updatepatient').post(updatePatient)
patientRoute.route('/deletepatient').get(deletePatient)