import mongoose from "mongoose";

const spookyShows = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    seasons:{
        type: Number,
        required: true
    },
    demographic:{
        type: String,
        required: true
    }
})