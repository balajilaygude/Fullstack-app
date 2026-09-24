const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config()

const app=express()
const port=process.env.PORT
const morgan=require("morgan")
const logger = require("./utils/logger")
const dbconnect = require("./configs/dbconnect")
const userRouter = require("./routes/user.route")
const movieRouter = require("./routes/movie.route")

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.get("/",async(req,res)=>{
    res.status(200).json({
        message:"Server started ",
        server:true
    })
})
app.use("/api/auth",userRouter)
app.use("/api",movieRouter)


app.listen(port,()=>{
    logger.info("Server Started ..",port)
    dbconnect()
})
