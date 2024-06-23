import mongoose, { Schema, model } from "mongoose";

const patientSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim:true
    },
    password: {
        type: String,
        required: true,
        trim:true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    admiton:{
        type:Date,
        default:new Date()
    }
})

export const patientModel=mongoose.model('patient',patientSchema)