import { appointmentModel } from "../database/model/appointmentModel.js";
import { ApiResponse } from "../helper/apiResponse.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import { customError } from "../helper/customError.js";

export const bookAppointment = asyncHandler(async (req, resp, next) => {
    const { doctor, category, blood, date } = req.body
    const data = req.user
    if ([doctor, category, blood, date].includes('')) {
        let err = new customError('all field are required')
        return next(err)
    }

    let dbQuery = await appointmentModel.create({
        patient: data._id,
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
    let { _id } = req.user
    let role = req.role
    let appointment

    if (role == 'patient') {

        appointment = await appointmentModel.find({ patient: _id }).populate([
            { path: 'doctor', select: '-password' },
            { path: 'patient', select: '-password' },
        ])
    } else {
        appointment = await appointmentModel.find().populate([
            { path: 'doctor', select: '-password' },
            { path: 'patient', select: '-password' },
        ])

    }
    if (appointment.length > 0) {
        return resp.json(new ApiResponse('', appointment))
    } else {
        let err = new customError('appointment not found')
        next(err)
    }
})


export const deleteAppointment = asyncHandler(async (req, resp, next) => {
    let { id } = req.query

    if (!id) {
        let err = new customError('please provide id')
        return next(err)
    }

    let deleteAppointment = await appointmentModel.findByIdAndDelete(id)
    if (!deleteAppointment) {
        let err = new customError('failed to delete appointment')
        return next(err)
    }

    return resp.json(new ApiResponse('deleted successfully', deleteAppointment))
})