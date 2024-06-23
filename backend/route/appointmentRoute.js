import { Router } from "express";
import { bookAppointment } from "../controller/appointmentController.js";

export const appointmentRoute=Router()

appointmentRoute.route('/bookappointment').post(bookAppointment)