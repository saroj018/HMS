import { doctorModel } from "../database/model/doctorModel.js";
import { patientModel } from "../database/model/patientModel.js";
import { ApiResponse } from "../helper/apiResponse.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import { customError } from "../helper/customError.js";
import { encryptPassword } from "../helper/encryptPassword.js";


export const addDoctor = asyncHandler(async (req, resp, next) => {
    const { email, password, name, address, gender, qualification, category, department, time } = req.body
    if ([email, password, name, address, gender, qualification, category, department, time].includes('')) {
        let err = new customError('all field are required')
        return next(err)
    }

    let findDoctor = await doctorModel.findOne({ email })
    if (findDoctor) {
        let err = new customError('doctor already exits')
        return next(err)
    }

    let hashPassword = await encryptPassword(password)
    console.log(hashPassword);
    let dbQuery = await doctorModel.create({
        email,
        password: hashPassword,
        name,
        address,
        gender,
        qualification,
        category,
        department,
        time
    })
    if (!dbQuery) {
        let err = new customError('faild to register doctor')
        return next(err)
    }

    return resp.json(new ApiResponse('doctor added successfully'))
})

export const getAllDoctors = asyncHandler(async (req, resp, next) => {
    let doctor = await doctorModel.find()
    if (doctor.length > 0) {
        return resp.json(new ApiResponse('', doctor))
    } else {
        let err = new customError('doctor not found')
        next(err)
    }
})


export const doctorLogin = asyncHandler(async (req, resp, next) => {
    let { email, password } = req.body

    if (!email) {
        let err = new customError('please provide email')
        return next(err)
    }

    if (!password) {
        let err = new customError('please provide password')
        return next(err)
    }

    let findDoctor = await doctorModel.findOne({ email })
    if (!findDoctor) {
        let err = new customError('invalid credintial')
        return next(err)
    }

    let decodePassword = await decryptPassword(findDoctor.password,password)
    if (!decodePassword) {
        let err = new customError('incorrect password')
        return next(err)
    }

    let token = genToken({ id: findDoctor._id, email,role:'doctor' })

    return resp.json(new ApiResponse('login successfully', findDoctor,token))
})