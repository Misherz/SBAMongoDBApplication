import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// import mongoose from 'mongoose';

//import DB connections
import connectDB from './db/conn.mjs';

//import routes
import showRoutes from './routes/showRoutes.mjs'
import movieRoutes from './routes/movieRoutes.mjs'
import characterRoutes from './routes/characterRoutes.mjs'

//import Data
import { characters } from './data/spookyCharacters.mjs'
import { movies } from './data/spookyMovies.mjs'
import { show } from './data/spookyShows.mjs'


//schema
import SpookyCharacters from './models/characterSchema.mjs'
import SpookyMovies from './models/movieSchema.mjs'
import SpookyShows from './models/showSchema.mjs'


//setup
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001;

//DB Connections
connectDB()

//middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))

//routes
app.use('/characters', characterRoutes);
app.use('/shows', showRoutes);
app.use('/movies', movieRoutes);

//always comment out before deployment because people can change your database
//seed goes here

//characters
app.get('/seed/characters', async (req, res) => {
    //optional

    await SpookyCharacters.deleteMany({});

    //create items in database
    await SpookyCharacters.create(characters);

    res.send('Seeding database');

})



//movies
app.get('/seed/movies', async (req, res) => {
    //optional

    await SpookyMovies.deleteMany({})

    //create items in database
    await SpookyMovies.create(movies)

    res.send('Seeding database')

})



//shows
app.get('/seed/shows', async (req, res) => {
    //optional

    await SpookyShows.deleteMany({})

    //create items in database
    await SpookyShows.create(show)

    res.send('Seeding database')

})





//listener
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`)
})