import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import colors from "colors"

dotenv.config();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const db = mongoose.connection;
db.on("error",()=>console.log("> DB Connection error".red));
db.once("open",()=>console.log("> DB connection successful".green));

/**
 * Middlewares
 */
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser());

/**
 * Root route
 */
app.get("/",(req,res)=>{
    res.status(200).json({"message":`App running on port ${port}`})
})



app.listen(port,()=>console.log(`App runningon port ${port}`));