import { customError } from "./customError.js"

export const asyncHandler=(fun)=>{
    return async(req,resp,next)=>{
        try {
            await fun(req,resp,next)
        } catch (error) {
            console.log(error.message);
           let err=new customError(error.message) 
           next(err)
        }
    }
}