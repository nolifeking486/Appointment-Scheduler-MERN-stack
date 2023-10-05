const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require("body-parser");

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();
app.use(bodyParser.json());

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes 
app.use("/api/v1/user", require("./routes/userRoutes"));
// port
const port = process.env.PORT || 8080;

//listen port
app.listen(port,()=>{
    console.log(`Server running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
    .bgCyan.white
    );
});
