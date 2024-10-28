import express from 'express';
import Show from '../models/movieSchema.mjs';

const router = express.Router();


// Create
router.post('/', async (req, res) => {
    try {

        let newShow = new Show(req.body);

        await newShow.save();

        res.status(200).json(newShow);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Read
router.get('/', async (req, res) => {
    try {

        let allShow = await Show.find({});

        res.json(allShow);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Read by ID
router.get('/:id', async (req, res) => {
    try {

        let oneShow = await Show.findById(req.params.id);

        res.json(oneShow);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Update
router.patch('/:id', async (req, res) => {
    try {

        let updatedShow = await Show.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.json(updatedShow);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Delete
router.delete('/:id', async (req, res) => {
    try {

        let deletedShow = await Show.findByIdAndDelete(req.params.id);
        
        res.json(deletedShow);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


export default router;