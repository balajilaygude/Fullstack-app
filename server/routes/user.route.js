const express=require("express")
const { signUp , signIn , changePassword} = require("../controllers/user.controller")
const userRouter=express.Router()

userRouter.post("/signin",signIn)
userRouter.post("/signup",signUp)
// userRouter.put("/password/:id",changePassword)


module.exports=userRouter