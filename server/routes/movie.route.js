const express=require("express")
const varify = require("../middleware/varify.middleware")
const { getAllMovie, getMovie, createMovie } = require("../controllers/movie.controller")

const movieRouter= express.Router()

movieRouter.get("/movie",varify,getAllMovie)
movieRouter.get("/movie/:id",varify,getMovie)
movieRouter.post("/movie",varify,createMovie)


module.exports=movieRouter