const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const patch = require('patch');


//inicializar express.js

const app = express()

//routes
//home routes
app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, ))
})