const dotenv=require('dotenv'); //load the environment variables
dotenv.config();

const express = require('express');
const cors = require('cors'); // allows controlled access to resources on a server from a different origin, enabling web applications to make API requests to external services.
const app = express();
const connectToDb = require('./db/db');
const userRoutes= require('./routes/user.routes');
connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.send("hello world");
});

app.use('/users',userRoutes);
module.exports=app;