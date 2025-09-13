import express from "express"
import { createStudent,getStudent, } from "../controllers/studentControllers.js";

const studentRouter=express.Router();

studentRouter.post("/",createStudent)
studentRouter.get("/",getStudent)

export default studentRouter;