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

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})