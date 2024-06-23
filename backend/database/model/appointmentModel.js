import mongoose, { Schema } from "mongoose";

const appointmentSchema=new Schema({
    name:{
        type:Schema.Types.ObjectId,
        ref:'pattients',
        required:true
    },
    doctor:{
        type:Schema.Types.ObjectId,
        ref:'doctors',
        required:true
    },
    blood:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
})


export const appointmentModel=mongoose.model('appointment',appointmentSchema)