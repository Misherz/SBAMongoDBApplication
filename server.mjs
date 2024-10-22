import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


//setup
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001;

//DB Connections

//middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))

//routes
app.use('/', spookyRoutes);


//always comment out before deployment because people can change your database
//seed goes here



//listener
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`)
})