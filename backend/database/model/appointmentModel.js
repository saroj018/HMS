import mongoose, { Schema } from "mongoose";

const appointmentSchema=new Schema({
    patient:{
        type:Schema.Types.ObjectId,
        ref:'patient',
    },
    doctor:{
        type:Schema.Types.ObjectId,
        ref:'doctor',
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