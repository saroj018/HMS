import { RollerCoaster } from "lucide-react";
import { receptionistModel } from "../database/model/receptionistModel.js";
import { ApiResponse } from "../helper/apiResponse.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import { customError } from "../helper/customError.js";
import { decryptPassword, encryptPassword } from "../helper/encryptPassword.js";
import { genToken } from "../helper/token.js";

export const addReceptionist = asyncHandler(async (req, resp, next) => {
    const { email, password, name, address, phone } = req.body
    if ([email, password, name, address, phone].includes('')) {
        let err = new customError('all field are required')
        return next(err)
    }

    let findPatient = await receptionistModel.findOne({ email })
    if (findPatient) {
        let err = new customError('receptionist already exits')
        return next(err)
    }

    let hashPassword = await encryptPassword(password)
    console.log(hashPassword);
    let dbQuery = await receptionistModel.create({
        email,
        password: hashPassword,
        name,
        address,
        phone
    })
    if (!dbQuery) {
        let err = new customError('faild to register receptionist')
        return next(err)
    }

    return resp.json(new ApiResponse('receptionist added successfully'))
})


export const getAllReceptionistController = asyncHandler(async (req, resp, next) => {
    let receptionist = await receptionistModel.find()
    if (receptionist.length > 0) {
        return resp.json(new ApiResponse('', receptionist))
    } else {
        let err = new customError('doctor not found')
        next(err)
    }
})


export const receptionistLogin = asyncHandler(async (req, resp, next) => {
    let { email, password } = req.body

    if (!email) {
        let err = new customError('please provide email')
        return next(err)
    }

    if (!password) {
        let err = new customError('please provide password')
        return next(err)
    }

    let findReceptionist = await receptionistModel.findOne({ email })
    if (!findReceptionist) {
        let err = new customError('invalid credintial')
        return next(err)
    }

    let decodePassword = await decryptPassword(findReceptionist.password,password)
    if (!decodePassword) {
        let err = new customError('incorrect password')
        return next(err)
    }
    let role='receptionist'

    let token = genToken({ id: findReceptionist._id, email,RollerCoaster })

    return resp.json(new ApiResponse('login successfully', findReceptionist,token,role))
})


export const getSingleReceptionist = asyncHandler(async (req, resp, next) => {
    let { id } = req.query

    if (!id) {
        let err = new customError('please provide id ')
        return next(err)
    }

    let findReceptionist = await receptionistModel.findById(id)
    if (!findReceptionist) {
        let err = new customError('patient not found')
        return next(err)
    }

    return resp.json(new ApiResponse('', findReceptionist))
})


export const updateReceptionist = asyncHandler(async (req, resp, next) => {
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

    let updateReceptionist = await receptionistModel.findByIdAndUpdate(id, {
        name,
        address,
        phone
    },
        {
            new: true, runValidators: true
        })

    if (!updateReceptionist) {
        let err = new customError('faild to update data')
        return next(err)
    }

    return resp.json(new ApiResponse('receptionist update successfully', updateReceptionist))
})


export const deleteReceptionist=asyncHandler(async(req,resp,next)=>{
    let{id}=req.query

    if(!id){
        let err=new customError('please provide id')
        return next(err)
    }

    let deleteReceptionist=await receptionistModel.findByIdAndDelete(id)
    if(!deleteReceptionist){
        let err=new customError('failed to delete receptionist')
        return next(err)
    }

    return resp.json(new ApiResponse('deleted successfully',deleteReceptionist))
})