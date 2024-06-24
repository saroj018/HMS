import { appointmentModel } from "../database/model/appointmentModel.js";
import { patientModel } from "../database/model/patientModel.js";
import { ApiResponse } from "../helper/apiResponse.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import { customError } from "../helper/customError.js";
import { decryptPassword, encryptPassword } from "../helper/encryptPassword.js";
import { genToken } from "../helper/token.js";
import { patientRoute } from "../route/patientRoute.js";

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
    console.log(dbQuery);
    if (!dbQuery) {
        let err = new customError('faild to register patient')
        return next(err)
    }

    return resp.json(new ApiResponse('patient added successfully'))
})




export const getAllPatients = asyncHandler(async (req, resp, next) => {
    
    let patient = await patientModel.find()
    if (patient.length > 0) {
        return resp.json(new ApiResponse('', patient))
    } else {
        let err = new customError('doctor not found')
        return next(err)
    }
})


export const patientLogin = asyncHandler(async (req, resp, next) => {
    let { email, password } = req.body

    if (!email) {
        let err = new customError('please provide email')
        return next(err)
    }

    if (!password) {
        let err = new customError('please provide password')
        return next(err)
    }
    console.log(email);
    let findPatient = await patientModel.findOne({ email })
    console.log(findPatient);
    if (!findPatient) {
        let err = new customError('user not found')
        return next(err)
    }


    let decodePassword = await decryptPassword(findPatient.password, password)
    if (!decodePassword) {
        let err = new customError('incorrect password')
        return next(err)
    }
    let role = 'patient'

    let token = genToken({ id: findPatient._id, email, role })

    return resp.json(new ApiResponse('login successfully', findPatient, token, role))
})


export const getSinglePatient = asyncHandler(async (req, resp, next) => {
    let { id } = req.query

    if (!id) {
        let err = new customError('please provide id ')
        return next(err)
    }

    let findPatient = await patientModel.findById(id)
    if (!findPatient) {
        let err = new customError('patient not found')
        return next(err)
    }

    return resp.json(new ApiResponse('', findPatient))
})


export const updatePatient = asyncHandler(async (req, resp, next) => {
    let { id } = req.query
    if (!id) {
        let err = new customError('please provide id')
        return next(err)
    }
    let { name, address, phone } = req.body
    console.log(name);

    if ([name, address, phone].includes('')) {
        let err = new customError('please provide all field')
        return next(err)
    }

    let updatePatient = await patientModel.findByIdAndUpdate(id, {
        name,
        address,
        phone
    },
        {
            new: true, runValidators: true
        })

    if (!updatePatient) {
        let err = new customError('faild to update data')
        return next(err)
    }

    return resp.json(new ApiResponse('patient update successfully', updatePatient))
})


export const deletePatient=asyncHandler(async(req,resp,next)=>{
    let{id}=req.query

    if(!id){
        let err=new customError('please provide id')
        return next(err)
    }

    let deletePatient=await patientModel.findByIdAndDelete(id)
    await appointmentModel.deleteMany({patient:id})
    if(!deletePatient){
        let err=new customError('failed to delete patient')
        return next(err)
    }

    return resp.json(new ApiResponse('deleted successfully',deletePatient))
})