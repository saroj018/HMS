import { adminModel } from "../database/model/adminModel.js";
import { doctorModel } from "../database/model/doctorModel.js";
import { patientModel } from "../database/model/patientModel.js";
import { receptionistModel } from "../database/model/receptionistModel.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import { customError } from "../helper/customError.js";
import { decodeToken } from "../helper/token.js";


export const patientAuth = asyncHandler(async (req, resp, next) => {
    let token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        let err = new customError('please provide token')
        return next(err)
    }

    console.log(token);
    let getPayload = decodeToken(token)

    if (getPayload.role == 'patient') {
        let findUser = await patientModel.findOne({ email: getPayload.email })
        if (!findUser) {
            let err = new customError("you are not authorized person")
            return next(err)
        }
        req.role = 'patient'
        req.user = findUser
        return next()
    }
    else if (getPayload.role == 'doctor') {
        let findUser = await doctorModel.findOne({ email: getPayload.email })
        if (!findUser) {
            let err = new customError("you are not authorized person")
            return next(err)
        }
        req.role = 'doctor'
        req.user = findUser
        return next()
    } else if (getPayload.role == 'receptionist') {
        let findUser = await receptionistModel.findOne({ email: getPayload.email })
        if (!findUser) {
            let err = new customError("you are not authorized person")
            return next(err)
        }
        req.role = 'receptionist'
        req.user = findUser
        return next()
    } else {
        let findUser = await adminModel.findOne({ email: getPayload.email })
        if (!findUser) {
            let err = new customError("you are not authorized person")
            return next(err)
        }
        req.role = 'admin'
        req.user = findUser
        return next()
    }

})
