import express from 'express';
import Character from '../models/characterSchema.mjs';

const router = express.Router();


// Create
router.post('/', async (req, res) => {
    try {

        let newCharacter = new Character(req.body);

        await newCharacter.save();

        res.status(200).json(newCharacter);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Read
router.get('/', async (req, res) => {
    try {

        let allCharacter = await Character.find({});

        res.json(allCharacter);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Read by ID
router.get('/:id', async (req, res) => {
    try {

        let oneCharacter = await Character.findById(req.params.id);

        res.json(oneCharacter);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Update
router.patch('/:id', async (req, res) => {
    try {

        let updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.json(updatedCharacter);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Delete
router.delete('/:id', async (req, res) => {
    try {

        let deletedCharacter = await Character.findByIdAndDelete(req.params.id);
        
        res.json(deletedCharacter);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


export default router;