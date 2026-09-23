const mongoose=require("mongoose")

const movieSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    rating:{
        type:Number,
        required:true
    },
    note:{
        type:String,
        required:true
    },
    watchdate:{
        type:Date,
        required:true
    },
    like:{
        type:String,
        enum:["Good","Must Watch","Rewatch"],
        default:"Good",
    }

},{timestamps:true})

const movieM= mongoose.model("movie",movieSchema)

module.exports=movieM