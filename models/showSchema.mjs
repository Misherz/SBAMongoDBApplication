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

spookyShows.index({name: 1}) //alphabetical


export default mongoose.model('Show', spookyShows)
//collection in DB, referenced in route for 'Song'