require("dotenv").config();
const app = require("./src/app")
//REQUERIMOPS EXPRESS
const express = require("express");

//REQUERIMOS SESSION
const session = require('express-session');

//EJECUTAMOS EXPRESS
const app = express();
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'secret',       
}));
const port = process.env.PORT || 4000;

app.listen(port);

console.log(`Listen on port ${port}`);