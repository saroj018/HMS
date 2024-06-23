import { patientModel } from "../database/model/patientModel.js";
import { ApiResponse } from "../helper/apiResponse.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import { customError } from "../helper/customError.js";
import { encryptPassword } from "../helper/encryptPassword.js";

export const addPatient = asyncHandler(async (req, resp, next) => {
    const { email, password, name, address, phone } = req.body
    if ([email, password, name, address, phone].includes('')) {
        let err = new customError('all field are required')
        return next(err)
    }

    let findPatient = await patientModel.findOne({ email })
    if (findPatient) {
        let err = new customError('patient already exits')
        return next(err)
    }

    let hashPassword = await encryptPassword(password)
    console.log(hashPassword);
    let dbQuery = await patientModel.create({
        email,
        password: hashPassword,
        name,
        address,
        phone
    })
    if (!dbQuery) {
        let err = new customError('faild to register patient')
        return next(err)
    }

    return resp.json(new ApiResponse('patient added successfully'))
})