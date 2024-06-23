import { doctorModel } from "../database/model/doctorModel.js";
import { patientModel } from "../database/model/patientModel.js";
import { ApiResponse } from "../helper/apiResponse.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import { customError } from "../helper/customError.js";
import { encryptPassword } from "../helper/encryptPassword.js";

const [appointment, setAppointment] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    blood: '',
    date: '',
    category: '',
    doctor: ''
})


export const bookAppointment = asyncHandler(async (req, resp, next) => {
    const { email, password, name, address, doctor, category, blood, date } = req.body
    if ([email, password, name, address, doctor, category, blood, date].includes('')) {
        let err = new customError('all field are required')
        return next(err)
    }

    let dbQuery = await doctorModel.create({
        email,
        password,
        name,
        address,
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