import { Router } from "express";
import { bookAppointment, getAllAppointment } from "../controller/appointmentController.js";
import { patientAuth } from "../middleware/auth.js";

export const appointmentRoute=Router()

appointmentRoute.route('/bookappointment').post(patientAuth,bookAppointment)
appointmentRoute.route('/getallappointment').get(patientAuth,getAllAppointment)