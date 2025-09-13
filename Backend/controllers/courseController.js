import Course from "../models/Course.js";
import Student from "../models/student.js";

export const createCourse=async(req,res)=>{
    try{
        const course=new Course(req.body);
        await course.save();
        res.status(201).json(course);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

export const getCourse=async(req,res)=>{
    try{
        const courses=await Course.find();
        res.json(courses);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

export const enrollstudent=async(req,res)=>{
    try{
        const courseId=req.params.courseId;
        const studentId=req.params.studentId;
        const course=await Course.findById(courseId);
        const student=await Student.findById(studentId);
        if(!course || !student){
            return res.status(404).json({message:"Course or Student not found"});
        }
        if(course.enrolledCount>=course.capacity){
            return res.status(400).json({message:"Course capacity full"});
        }
        course.students.push(studentId);
        course.enrolledCount+=1;
        await course.save();
        res.json({message:"Student enrolled successfully"});
    }catch(error){
        res.json(courses);
    }
};
