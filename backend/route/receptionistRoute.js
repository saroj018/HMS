import { Router } from "express";
import { addReceptionist, deleteReceptionist, getAllReceptionistController, getSingleReceptionist, receptionistLogin, updateReceptionist } from "../controller/receptionistController.js";

export const receptionistRoute=Router()

receptionistRoute.route('/addreceptionist').post(addReceptionist)
receptionistRoute.route('/getallreceptionist').get(getAllReceptionistController)
receptionistRoute.route('/login').post(receptionistLogin)
receptionistRoute.route('/getsinglereceptionist').get(getSingleReceptionist)
receptionistRoute.route('/updatereceptionist').post(updateReceptionist)
receptionistRoute.route('/deletereceptionist').get(deleteReceptionist)