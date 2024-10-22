import mongoose from "mongoose";

const spookyMovies = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    spookLevel:{
        type: Number,
        required: true
    },
    demographic:{
        type: String,
        required: true
    },
    series:{
        type: Number
    },
})