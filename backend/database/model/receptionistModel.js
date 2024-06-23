import mongoose, { Schema } from "mongoose";

const receptionistSchema=new Schema({
    name:{
        type:Strig,
        required:true
    },
    address:{
        type:Strig,
        required:true
    },
    phone:{
        type:Strig,
        required:true
    },
    email:{
        type:Strig,
        required:true
    },
    password:{
        type:Strig,
        required:true
    },
})

export const receptionistModel=mongoose.model('receptionist',receptionistSchema)