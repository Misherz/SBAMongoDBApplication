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

spookyCharacters.index({name: 1}) //alphabetical


export default mongoose.model('Character', spookyCharacters)
//collection in DB, referenced in route for 'Character'