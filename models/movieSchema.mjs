import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
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

movieSchema.index({name: 1}) //alphabetical


export default mongoose.model('Movie', movieSchema)
//collection in DB, referenced in route for 'Movie'