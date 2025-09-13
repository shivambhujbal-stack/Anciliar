import express from "express"
import { createCourse,getCourse,enrollstudent } from "../controllers/courseControllers.js";

const courseRouter=express.Router();

courseRouter.post("/",createCourse);
courseRouter.get("/",getCourse);
courseRouter.post("/",enrollstudent);

export default courseRouter;
