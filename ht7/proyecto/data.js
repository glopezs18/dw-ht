const express = require('express');
const mongoose = require('mongoose');
const { loginModel } = require('./models.js');
const jwt = require('jsonwebtoken');
var dataLogin = express.Router();

dataLogin.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ht7')

// const dataSchema = new mongoose.Schema({
//     usuario: String,
//     clave: String,
//     dpi: String
// })

// const dataModel = mongoose.model("jwtht7", loginSchema)

// Get data
dataLogin.get('/', verifyToken,function (req, res) {

    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if (error) {
            res.sendStatus(403);
        } else {
            loginModel.find({}).then(function(data){
                data.push({token: req.token})
                res.json(data)
            }).catch(function(err) {
                console.log(err)
            })
        }
    });

    
});


// Authorization: Bearer <token>
function verifyToken(req, res, next) {    
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];    
        req.token = bearerToken;        
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = dataLogin