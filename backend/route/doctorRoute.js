import { Router } from "express";
import { addDoctor, deleteDoctor, doctorLogin, getAllDoctors, getSingleDoctor, updateDoctor } from "../controller/doctorController.js";

export const doctorRoute=Router()

doctorRoute.route('/adddoctor').post(addDoctor)
doctorRoute.route('/getalldoctor').get(getAllDoctors)
doctorRoute.route('/login').post(doctorLogin)
doctorRoute.route('/getsingledoctor').get(getSingleDoctor)
doctorRoute.route('/updatedoctor').post(updateDoctor)
doctorRoute.route('/deletedoctor').get(deleteDoctor)