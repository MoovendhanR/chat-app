import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongo_url = process.env.mongo_url
const ConnectMongoDB = async()=>{
    try {
       await mongoose.connect(mongo_url)
       console.log("connected to mongodb")
    } catch (error) {
        console.log("error connecting to mongodb",error.message)
    }
}

export default ConnectMongoDB;