export const globleErrorHandler=(err,req,resp,next)=>{
     resp.status(err.statusCode).json({success:err.success,error:err.message,statusCode:err.statusCode})
}