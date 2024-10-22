import mongoose from "mongoose";

const halloweenAct = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    funLevel:{
        type: Number,
        required: true
    },
    demographic:{
        type: String,
        required: true
    }
})