import express from "express";
import mongoose from "mongoose";
import courseRouter from "./Routes/courseRoutes.js";
import studentRouter from "./Routes/studentRoutes.js";
import dotenv from "dotenv";
dotenv.config();
const app=express();
const Port=process.env.PORT || 5000;
app.use("/course",courseRouter);
app.use("/student",studentRouter);
app.use(express.json());

app.listen(Port,()=>{
    console.log("Server Started");
})