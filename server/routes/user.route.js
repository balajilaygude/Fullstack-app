const express=require("express")
const { signUp } = require("../controllers/user.controller")
const userRouter=express.Router()

// userRouter.post("/signin",signIn)
userRouter.post("/signup",signUp)
// userRouter.post("/change-passwors",changePassword)


module.exports=userRouter