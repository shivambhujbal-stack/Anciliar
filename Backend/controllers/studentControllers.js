import Course from "../models/Course.js";
import Student from "../models/student.js";

export const createStudent=async(req,res)=>{
    try{
        const student=new Student(req.body);
        await student.save();
        res.status(201).json(student);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

export const getStudent=async(req,res)=>{
    try{
        const students=await Student.find();
        res.json(students);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};
