import mongoose from "mongoose";
const Student=new mongoose.Schema({
    id:String,
    name: String,
    email: String
})

export default mongoose.model("Student",Student);