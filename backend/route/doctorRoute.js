import { Router } from "express";
import { addDoctor, doctorLogin, getAllDoctors } from "../controller/doctorController.js";

export const doctorRoute=Router()

doctorRoute.route('/adddoctor').post(addDoctor)
doctorRoute.route('/getalldoctor').get(getAllDoctors)
doctorRoute.route('/login').post(doctorLogin)