//require('dotenv').config({path: "./env"})
import dotenv from "dotenv"
dotenv.config({
    path: ".env"
})


import connectDB from "./db/index.js";

connectDB()




/*
import express from "express";

const app = express()

// IIFE funtion to connect database(try catch so that we can handle error properly)
// async is used because database takes time to give response
;( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("Error: ",error)
        throw error
    }
})()
*/