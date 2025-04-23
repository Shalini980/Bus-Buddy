const dotenv=require('dotenv'); //load the environment variables
dotenv.config();

const express = require('express');
const cors = require('cors'); // allows controlled access to resources on a server from a different origin, enabling web applications to make API requests to external services.
const app = express();

const connectToDb = require('./db/db');
connectToDb();

app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello world");
});

module.exports=app;