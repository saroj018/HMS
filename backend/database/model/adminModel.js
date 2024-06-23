import mongoose, { Schema } from "mongoose";

const adminSchema=new Schema({
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
})


export const adminModel=mongoose.model('admin',adminSchema)