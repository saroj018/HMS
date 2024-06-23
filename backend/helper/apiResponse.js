export class ApiResponse{
    constructor(message,data=null){
        this.statusCode= 200
        this.message=message
        this.success=true
        this.data=data
    }
}