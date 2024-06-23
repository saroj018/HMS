import { Router } from "express";
import { addReceptionist, getAllReceptionistController } from "../controller/receptionistController.js";

export const receptionistRoute=Router()

receptionistRoute.route('/addreceptionist').post(addReceptionist)
receptionistRoute.route('/getallreceptionist').get(getAllReceptionistController)