
const Film = require('../models/FilmModel'); 
exports.getAllFilm = async(req, res)=>{
    try{
      const films= await Film.find({});
      res.status(200).json(films);
  
    } catch(error){
      console.log(error.message)
      res.status(500).json({message:error.message})
    }
}

exports.addFilm = async(req, res)=>{
    try{
        const film= await Film.create(req.body);
        res.status(200).json(film);
  
      } catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
      }
}
