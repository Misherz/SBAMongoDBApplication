import express from 'express';
import Show from '../models/showSchema.mjs';

const router = express.Router();

//create
router.post('/', async (req, res)=>{
    try {
        //create variable to cache new movies in
        const newShow = new Show(req.body);

        //save to db and add id to what we will return
        await newShow.save();

        //send new doc to client
        res.json(newShow)
        
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server Error'})
    }
})

//read
router.get('/', async (req, res) => {
    try {
        const allShows = await Show.find({})

        res.json(allShows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Server error' })
    }
})

//put
router.put('/:id', async (req, res) => {
    try {
        // specify action
        let updatedShow = await Show.findByIdAndUpdate(req.params.id, req.body, { new: true });

        //resond to client
        res.json(updatedShow);
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Server error' })
    }
})

//delete
router.delete('/:id', async (req, res) => {
    try {
        let deletedShow = await Show.findByIdAndDelete(req.params.id);

        res.json(deletedShow);
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Server error' })
    }
})


export default router