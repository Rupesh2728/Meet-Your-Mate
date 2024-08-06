const express= require('express');
const cors = require("cors");
const app= express();
const morgan = require('morgan');
require('dotenv').config() 

app.use(express.json());

//Routes
const RegisterRouter = require('./routes/register/register.router');
const LoginRouter = require('./routes/login/login.route');

// app.use(cors({
//     origin:`${process.env.FRONT_END_URL}`,
//     credentials: true,
// }));

app.use(cors({
    origin:'http://localhost:3000',
    credentials: true,
}));

app.use(morgan('combined'));

app.use('/register',RegisterRouter);
app.use('/login',LoginRouter);

module.exports = app;

