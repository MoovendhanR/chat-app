import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import ConnectMongoDB from "./config/db.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/",(req,res)=>{
    // root route
    res.send("hello world!!")
})
app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    ConnectMongoDB()
    console.log(`listening on port ${PORT}`)
})