import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log('failed to connect DB',error.message);
        process.exit()
    }
}