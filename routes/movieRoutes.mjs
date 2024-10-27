import express from 'express';
import Movie from '../models/movieSchema.mjs';

const router = express.Router();

//create
router.post('/', async (req, res)=>{
    try {
        //create variable to cache new movies in
        const newMovie = new Movie(req.body);

        //save to db and add id to what we will return
        await newMovie.save();

        //send new doc to client
        res.json(newMovie)
        
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server Error'})
    }
})

//read
router.get('/', async (req, res) => {
    try {
        const allMovies = await Movie.find({})

        res.json(allMovies)
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Server error' })
    }
})

//put
router.put('/:id', async (req, res) => {
    try {
        // specify action
        let updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });

        //resond to client
        res.json(updatedMovie);
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Server error' })
    }
})

//delete
router.delete('/:id', async (req, res) => {
    try {
        let deletedMovie = await Movie.findByIdAndDelete(req.params.id);

        res.json(deletedMovie);
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Server error' })
    }
})


export default router