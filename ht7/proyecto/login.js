const express = require('express');
const mongoose = require('mongoose');
const { loginModel } = require('./models.js');
const jwt = require('jsonwebtoken');
var login = express.Router();

login.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ht7')

// const loginSchema = new mongoose.Schema({
//     usuario: String,
//     clave: String,
//     dpi: String
// })

// const loginModel = mongoose.model("jwtht7", loginSchema)

//Api Main
login.get("/", (req, res) => {
    res.json({
        message: "Nodejs, JWT and MongoDB"
    });
});

// Login User
login.post('/:dpi', function (req, res) { 
    
    const user = {        
        nombre: req.body.usuario,
        clave: req.body.clave,
        dpi: req.params.dpi
    }
    loginModel.create(user)
    .then(() => {
        jwt.sign({user: user}, 'secretkey', (err, token) => {
            res.json({
                token: token
            })
        });
    })
    .catch(err => res.json(err))
});


module.exports = login