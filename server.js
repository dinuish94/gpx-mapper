const express = require('express');
const app = express();
const togeojson = require ('togeojson');
const fs = require ('fs');
const jsdom = require('jsdom').jsdom;
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.post('/routes/upload', upload.single('file'), (req, res) => {
    let file = req.file;
    if (file){
        console.log("Uploaded " + file.originalname + " to " + file.path);

        fs.readFile(file.path, (err, data) =>{
            let gpx = jsdom(data);
            let converted = togeojson.gpx(gpx);

            res.send(converted);
        })
    }
    else{
        console.log("No File");
        res.sendStatus(500);
    }
})

let mapRouter = require('./server/map.route.js');

app.use('/geolocations',mapRouter);

app.use('/app',express.static(__dirname + "/public"));
app.use('/',express.static(__dirname + "/public"));
app.use('/modules',express.static(__dirname + "/node_modules"));
app.use('/modules',express.static(__dirname + "/bower_components"));

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})