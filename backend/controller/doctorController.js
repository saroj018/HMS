import { RollerCoaster } from "lucide-react";
import { doctorModel } from "../database/model/doctorModel.js";
import { patientModel } from "../database/model/patientModel.js";
import { ApiResponse } from "../helper/apiResponse.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import { customError } from "../helper/customError.js";
import { decryptPassword, encryptPassword } from "../helper/encryptPassword.js";
import { genToken } from "../helper/token.js";


export const addDoctor = asyncHandler(async (req, resp, next) => {
    const { email, password, name, address, gender, qualification, category, department, shift } = req.body
    if ([email, password, name, address, gender, qualification, category, department, shift].includes('')) {
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
        shift
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
let role='doctor'
    let token = genToken({ id: findDoctor._id, email,role })

    return resp.json(new ApiResponse('login successfully', findDoctor,token,role))
})



export const getSingleDoctor = asyncHandler(async (req, resp, next) => {
    let { id } = req.query

    if (!id) {
        let err = new customError('please provide id ')
        return next(err)
    }

    let findDoctor = await doctorModel.findById(id)
    if (!findDoctor) {
        let err = new customError('doctor not found')
        return next(err)
    }

    return resp.json(new ApiResponse('', findDoctor))
})

const[doctor,setDoctor]=useState({
    name:'',
    email:'',
    password:'',
    shift:'',
    department:'',
    category:'',
    address:'',
    qualification:'',
    gender:''
  })

export const updateDoctor = asyncHandler(async (req, resp, next) => {
    let { id } = req.query
    if (!id) {
        let err = new customError('please provide id')
        return next(err)
    }
    let { name, address,shift,department,category,qualification,gender } = req.body
    console.log(name);

    if ([name, address,shift,department,category,qualification,gender].includes('')) {
        let err = new customError('please provide all field')
        return next(err)
    }

    let updatePatient = await doctorModel.findByIdAndUpdate(id, {
        name,
        address,
        qualification,
        gender,
        category,
        shift,
        department
    },
        {
            new: true, runValidators: true
        })

    if (!updatePatient) {
        let err = new customError('faild to update data')
        return next(err)
    }

    return resp.json(new ApiResponse('doctor update successfully', updatePatient))
})


export const deleteDoctor=asyncHandler(async(req,resp,next)=>{
    let{id}=req.query

    if(!id){
        let err=new customError('please provide id')
        return next(err)
    }

    let deletePatient=await doctorModel.findByIdAndDelete(id)
    if(!deletePatient){
        let err=new customError('failed to delete doctor')
        return next(err)
    }

    return resp.json(new ApiResponse('deleted successfully',deletePatient))
})