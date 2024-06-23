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

    let findUser = await patientModel.findOne({ email: getPayload.email })
    if (!findUser) {
        let err = new customError("you are not authorized person")
        return next(err)
    }
    req.user = findUser
    next()

})
export const doctorAuth = asyncHandler(async (req, resp, next) => {
    let token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        let err = new customError('please provide token')
        return next(err)
    }

    let getPayload = decodeToken(token)

    let findUser = await doctorModel.find({ email: getPayload.email })
    if (!findUser) {
        let err = new customError("you are not authorized person")
        return next(err)
    }
    req.user = getPayload
    next()

})
export const receptionistAuth = asyncHandler(async (req, resp, next) => {
    let token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        let err = new customError('please provide token')
        next(err)
    }

    let getPayload = decodeToken(token)

    let findUser = await receptionistModel.find({ email: getPayload.email })
    if (!findUser) {
        let err = new customError("you are not authorized person")
        return next(err)
    }
    req.user = getPayload
    next()

})