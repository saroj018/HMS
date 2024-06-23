import { Router } from "express";
import { adminLogin, adminSignUp } from "../controller/adminController.js";

export const adminRoute=Router()

adminRoute.route('/signup').post(adminSignUp)
adminRoute.route('/login').post(adminLogin)