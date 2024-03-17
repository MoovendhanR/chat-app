import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from './routes/messages.routes.js'
import ConnectMongoDB from "./config/db.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());//to parse the incoming requests with json payloads(from req.body)
app.use(cookieParser())

app.get("/",(req,res)=>{
    // root route
    res.send("hello world!!")
})
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)



app.listen(PORT,()=>{
    ConnectMongoDB()
    console.log(`listening on port ${PORT}`)
})