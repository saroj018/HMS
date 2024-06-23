export class ApiResponse{
    constructor(message){
        this.statusCode= 200
        this.message=message
        this.success=true
    }
}