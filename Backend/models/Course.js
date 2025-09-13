import mongoose from "mongoose";
const Course=new mongoose.Schema({
    id:String,
    title: String,
    capacity: Number,
    enrolledCount:Number
})

export default mongoose.model("Course",Course);