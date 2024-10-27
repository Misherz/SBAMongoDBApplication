import express from 'express';
import Character from '../models/characterSchema.mjs';

const router = express.Router();

//create
router.post('/', async (req, res)=>{
    try {
        //create variable to cache new movies in
        const newCharacter = new Character(req.body);

        //save to db and add id to what we will return
        await newCharacter.save();

        //send new doc to client
        res.json(newCharacter)
        
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server Error'})
    }
})

//read
router.get('/', async (req, res) => {
    try {
        const allCharacter = await Character.find({})

        res.json(allCharacter)
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Server error' })
    }
})

//put
router.put('/:id', async (req, res) => {
    try {
        // specify action
        let updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });

        //resond to client
        res.json(updatedCharacter);
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Server error' })
    }
})

//delete
router.delete('/:id', async (req, res) => {
    try {
        let deletedCharacter = await Character.findByIdAndDelete(req.params.id);

        res.json(deletedCharacter);
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Server error' })
    }
})


export default router