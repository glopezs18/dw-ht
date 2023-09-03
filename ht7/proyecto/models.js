var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const loginSchema = new mongoose.Schema({
    usuario: String,
    clave: String,
    dpi: String
})

// const dataSchema = new mongoose.Schema({
//     usuario: String,
//     clave: String,
//     dpi: String
// })

const loginModel = mongoose.model("jwtht7", loginSchema)
// const dataModel = mongoose.model("jwtht7", dataSchema)

module.exports = { loginModel }