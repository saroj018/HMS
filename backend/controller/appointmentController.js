import { appointmentModel } from "../database/model/appointmentModel.js";
import { ApiResponse } from "../helper/apiResponse.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import { customError } from "../helper/customError.js";

export const bookAppointment = asyncHandler(async (req, resp, next) => {
    const { doctor, category, blood, date } = req.body
    if ([doctor, category, blood, date].includes('')) {
        let err = new customError('all field are required')
        return next(err)
    }

    let dbQuery = await appointmentModel.create({
        doctor,
        category,
        blood,
        date
    })
    if (!dbQuery) {
        let err = new customError('faild to register doctor')
        return next(err)
    }

    return resp.json(new ApiResponse('doctor added successfully'))
})