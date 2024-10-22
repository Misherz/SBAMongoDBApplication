import mongoose from "mongoose";

const spookyCharacters = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    spookLevel:{
        type: Number,
        required: true
    },
    origin:{
        type: String,
        required: true
    }
})