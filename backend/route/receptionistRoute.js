import { Router } from "express";
import { addReceptionist } from "../controller/receptionistController.js";

export const receptionistRoute=Router()

receptionistRoute.route('/addreceptionist').post(addReceptionist)