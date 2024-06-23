import { Router } from "express";
import { bookAppointment, getAllAppointment } from "../controller/appointmentController.js";

export const appointmentRoute=Router()

appointmentRoute.route('/bookappointment').post(bookAppointment)
appointmentRoute.route('/getallappointment').get(getAllAppointment)