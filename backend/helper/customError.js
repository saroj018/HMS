export class customError extends Error{
    constructor(error,statusCode=400){
        super(error)
        this.statusCode=statusCode
        this.success=false
    }
}
