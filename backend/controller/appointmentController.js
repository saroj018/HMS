import { appointmentModel } from "../database/model/appointmentModel.js";
import { ApiResponse } from "../helper/apiResponse.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import { customError } from "../helper/customError.js";

export const bookAppointment = asyncHandler(async (req, resp, next) => {
    const { doctor, category, blood, date } = req.body
    const data=req.user
    if ([doctor, category, blood, date].includes('')) {
        let err = new customError('all field are required')
        return next(err)
    }

    let dbQuery = await appointmentModel.create({
        patient:data._id,
        doctor,
        category,
        blood,
        date
    })
    if (!dbQuery) {
        let err = new customError('faild to register doctor')
        return next(err)
    }

    return resp.json(new ApiResponse('booking appointment successfully'))
})



export const getAllAppointment = asyncHandler(async (req, resp, next) => {
    let appointment = await appointmentModel.find().populate([
        {path:'doctor',select:'-password'},
        {path:'patient',select:'-password'},
    ])
    console.log(appointment);
    if (appointment.length > 0) {
        return resp.json(new ApiResponse('', appointment))
    } else {
        let err = new customError('doctor not found')
        next(err)
    }
})