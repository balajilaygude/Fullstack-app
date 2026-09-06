const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const userM = require("../models/user.model")


async function signUp(req,res) {
    const {name,email,password}=req.body
    if(!name || !email || !password ){
        return res.json({
            error:"Plase Enter all Details"
        })
    }
    const checkUser= await userM.findOne({email})
    if(checkUser){
        return res.json({
            error:"User Exist Plase Log in",
        })
    }
    const hashPassword=await bcrypt.hash(password,10)

    const newUser= await userM.create({
        name,
        email,
        password:hashPassword
    })

    res.json({
        message:"User Created Successfully",
        newUser
    })    
}



module.exports={signUp}