const express = require('express');
const mongoose = require('mongoose')
var infoData = express.Router();

infoData.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ht6')

const dataSchema = new mongoose.Schema({
    country_name: String,
    country_code: String,
    series_name: String,
    series_code: String,
    YR2013: Number,
    YR2014: Number,
    YR2015: Number,
    YR2016: Number,
    YR2017: Number,
    YR2018: Number,
    YR2019: Number
})

const dataModel = mongoose.model("cargadatosht6", dataSchema)

// All Data Info
infoData.get('/', function (req, res) {
    dataModel.find({}).then(function(data){
        res.json(data)
    }).catch(function(err) {
        console.log(err)
    })
});

// Create New Info
infoData.post('/createData', function (req, res) {    
    dataModel.create(req.body)
    .then(res.json({message: "Registro exitoso."}))
    .catch(err => res.json(err))
});

// Update Info byId
infoData.put('/updateData/:id', function (req, res) {    
    const id = req.params.id;
    const country_name = req.body.country_name;
    const country_code = req.body.country_code;
    const series_name = req.body.series_name;
    const series_code = req.body.series_code;
    const YR2013 = req.body.YR2013;
    const YR2014 = req.body.YR2014;
    const YR2015 = req.body.YR2015;
    const YR2016 = req.body.YR2016;
    const YR2017 = req.body.YR2017;
    const YR2018 = req.body.YR2018;
    const YR2019 = req.body.YR2019;
    const dataRegister = {
        country_name: country_name,
        country_code: country_code,
        country_code: country_code,
        series_name: series_name,
        series_code: series_code,
        YR2013: YR2013,
        YR2014: YR2014,
        YR2015: YR2015,
        YR2016: YR2016,
        YR2017: YR2017,
        YR2018: YR2018,
        YR2019: YR2019
    };
    // res.json(dataRegister)
    dataModel.findByIdAndUpdate({_id: id}, dataRegister)
    .then(data => res.json({message: "Se actualizó el registro." , id: data._id}))
    .catch(err => res.json(err))
});

// Update Info byId
infoData.delete('/deleteData/:id', function (req, res) {    
    const id = req.params.id;
    dataModel.findByIdAndDelete({_id: id})
    .then(res.json({message: "Registro eliminado."}))
    .catch(err => res.json(err))
});

module.exports = infoData