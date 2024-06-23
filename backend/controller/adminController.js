import { adminModel } from "../database/model/adminModel.js";
import { ApiResponse } from "../helper/apiResponse.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import { customError } from "../helper/customError.js";
import { decryptPassword, encryptPassword } from "../helper/encryptPassword.js";
import { genToken } from "../helper/token.js";

export const adminSignUp = asyncHandler(async (req, resp, next) => {
    let { email, password } = req.body

    if (!email) {
        let err = new customError('please provide email')
        return next(err)
    }
    if (!password) {
        let err = new customError('please provide password')
        return next(err)
    }

    let findAdmin = await adminModel.findOne({ email })
    if (findAdmin) {
        let err = new customError('email already used')
        return next(err)
    }

    let hashPassword = await encryptPassword(password)
    let dbQuery = await adminModel.create({
        email,
        password: hashPassword
    })

    if (!dbQuery) {
        let err = new customError('faild to create admin on db')
        return next(err)
    }

    resp.json(new ApiResponse('signup successfully', dbQuery))
})
export const adminLogin = asyncHandler(async (req, resp, next) => {
    let { email, password } = req.body

    if (!email) {
        let err = new customError('please provide email')
        return next(err)
    }
    if (!password) {
        let err = new customError('please provide password')
        return next(err)
    }

    let findAdmin = await adminModel.findOne({ email })
    if (!findAdmin) {
        let err = new customError('user not found')
        return next(err)
    }

    let hashPassword = await decryptPassword(findAdmin.password, password)
    if (!hashPassword) {
        let err = new customError('incorrect password')
        return next(err)
    }
    let role='admin'
    let token = genToken({ id: findAdmin._id, email, role })

    resp.json(new ApiResponse('login successfully', findAdmin, token,role))
})