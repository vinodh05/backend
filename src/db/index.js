
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected, DB host:${connectionInstance.connection.host}`);
    } catch(error){
        console.log("MONGODB connection error ",error);
        //throw error
        process.exit()
    }
}

export default connectDB