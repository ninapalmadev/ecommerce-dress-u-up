const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

//declarando path estatico
let staticPath = path.join(__dirname, "public")


//inicializar express.js
const app = express()

//middlewares
app.use(express.static(staticPath))

//routes
//home routes
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "telas", "index.html"))
})

//login route
app.get('/cadastro-cliente', (req, res) => {
    res.sendFile(path.join(staticPath, "telas", "cadastro-cliente.html"))
})

//404 route
app.get('/erro', (req, res) => {
    res.sendFile(path.join(staticPath, "telas", "erro.html"))
})

app.use((req, res) => {
    res.redirect('/erro')
})

app.listen(3000, () => {
    console.log('Escutando a porta')
})