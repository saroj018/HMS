import mongoose, { Schema, model } from "mongoose";

const doctorSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
})

export const doctorModel=mongoose.model('doctor',doctorSchema)