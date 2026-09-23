const express=require("express")
const { signUp , signIn , changePassword} = require("../controllers/user.controller")
const varify = require("../middleware/varify.middleware")
const userRouter=express.Router()

userRouter.post("/signup" ,signUp)
userRouter.post("/signin",signIn)
userRouter.put("/password",varify,changePassword)


module.exports=userRouter