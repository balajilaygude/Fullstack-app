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
  return res.status(404).json({
    error: "Cannot find the movie",
  });
}

if (user !== movie.user.toString()) {
  return res.status(403).json({
    message: "You are not authorized for this",
    success: false,
  });
}

return res.status(200).json(movie) ;
  } catch (error) {
    logger.error("getMovies :-", error);
  }
}

async function createMovie(req,res) {
  console.log(req.body)
    try {
        const{name,rating,note,watchdate,like}=req.body
        const {id}=req.user
        if(!name || !note || !rating || !watchdate || !like || !id){
            return res.status(409).json({
                error:"Plase Enter all Values"

            })
        }
        const checkMovie= await movieM.findOne({name})
        if(checkMovie && checkMovie?.user?.toString()==id){
            return res.status(409).json({
                message:"Movie Review exists ",
                success:false
            })
        }
        const movie=await movieM.create({
            user:id,name,rating,note,watchdate,like
        })
        res.status(201).json({
            message:" Created Successfully",
            movie,
            success:true
        })
    } catch (error) {
        logger.error("createMovie :-",error)
        console.log(error)
    }
}

async function deleteMovie(req, res) {
  const user=req.user.id
  const { id } = req.params;
  console.log(id ,user)
  try {
    const movie = await movieM.findById(id);
    if (!movie) {
  return res.status(404).json({
    error: "Cannot find the movie",
  });
}

if (user !== movie.user.toString()) {
  return res.status(403).json({
    message: "You are not authorized for this",
    success: false,
  });
}

const del=await movieM.findByIdAndDelete(id)

return res.status(200).json({
  success :true,
  message:"movie Deleted Successfully",
  del
}) ;
  } catch (error) {
    logger.error("Deletemovie :-", error);
  }
}

module.exports = { getAllMovie, getMovie ,createMovie,deleteMovie};
