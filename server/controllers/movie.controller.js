const movieM = require("../models/movie.model");
const logger = require("../utils/logger");

async function getAllMovie(req, res) {
  try {
    const {id}=req.user
    const movie = await movieM.find({user:id});
    res.status(200).json(movie);
  } catch (error) {
    logger.error("getAllMovies :- ",error);
  }
}

async function getMovie(req, res) {
  try {
    const { id } = req.params;
    const user=req.user.id
    const movie = await movieM.findById(id);
    if (!movie) {
      res.status(404).json({
        error: "Connot find the movie",
      });
    }
    if(!user===movie._id){
        res.status(409).json({
            message:"You are not authorized for This",
            success:false
        })
    }
    res.status(200).json(movie);
  } catch (error) {
    logger.error("getMovies :-", error);
  }
}

async function createMovie(req,res) {
    try {
        const{name,rating,note,watchdate,like}=req.body
        const {id}=req.user
        if(!name || !note || !rating || !watchdate || !like || !id){
            res.status(409).json({
                error:"Plase Enter all Values"

            })
        }

        const movie=await movieM.create({
            id,name,rating,note,watchdate,like
        })
        res.satus(201).json({
            message:" Created Successfully",
            movie,
            success:true
        })
    } catch (error) {
        logger.error("createMovie :-",error)
    }
}


module.exports = { getAllMovie, getMovie };
