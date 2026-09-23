const express=require("express")
const { signUp , signIn , changePassword} = require("../controllers/user.controller")
const userRouter=express.Router()

userRouter.post("/signup",signUp)
userRouter.post("/signin",signIn)
userRouter.put("/password/:id",changePassword)


module.exports=userRouter