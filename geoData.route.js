const express = require('express'),
    mongoose = require('mongoose');

const togeojson = require ('togeojson');
const fs = require ('fs');
const jsdom = require('jsdom').jsdom;
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

mongoose.set('debug', false);

const GeoDataModel = mongoose.model('GeoData');

const Router = express.Router();

Router.post('/upload', upload.single('file'), (req, res) => {
    let file = req.file;
    if (file){
        console.log("Uploaded " + file.originalname + " to " + file.path);

        fs.readFile(file.path, (err, data) =>{
            let gpx = jsdom(data);
            let converted = togeojson.gpx(gpx);

            let geoData = new GeoDataModel(converted);
            geoData.save().then(geodata => {
                res.send(geodata);
            });

            // res.send(converted);
        })
    }
    else{
        console.log("No File");
        res.sendStatus(500);
    }
})

Router.get('/', (req,res) => {
    GeoDataModel.find().then( data => {
        res.send(data[0]['features'][0]['geometry']['coordinates']);
    })
})

module.exports = Router;