const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    nickname:{
        type: String,
        required: true 
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
},{timestamps:true});

const userM=mongoose.model("user",userSchema)
module.exports=userM