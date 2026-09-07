const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const userM = require("../models/user.model")
const logger = require("../utils/logger")


async function signUp(req,res) {
    const {name,email,password}=req.body
    if(!name || !email || !password ){
        return res.json({
            error:"Plase Enter all Details"
        })
    }
    const findUser= await userM.findOne({email})
    if(findUser){
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

async function signIn(req,res) {
    const {email,password}=req.body
    if(!email || !password ){
        return res.json({
            error:"Plase Enter all Credentials"
        })
    }
    const findUser= await userM.findOne({email})
    if(!findUser){
        return res.json({
            error:"User Not Found",
        })
    }
    const hashPassword=await bcrypt.compare(password,findUser.password)
    if(!hashPassword){
        return res.json({
            error:"Wrong credentials"
        })
    }

    res.json({
        message:"User Sign In Successfully",
        findUser
    })  
}

async function changePassword(req,res) {
    const {id}=req.params
    const {password}=req.body
    logger.info(id )
    logger.info(password )
    const findUser= await userM.findById(id)
    if(!findUser){
        return res.json({
            error:"User Not Found",
        })
    }
    logger.info(findUser)
    const hashPassword=await bcrypt.hash(password,10)
    const newUser=await userM.findByIdAndUpdate(id,{password:hashPassword},{new:true})
    logger.info(newUser)
    return res.json({
        message:"Password Updated",
        newUser
    })
}
module.exports={signUp,signIn,changePassword}