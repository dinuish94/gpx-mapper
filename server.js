const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/geoData')
    .then(() => console.log("Connected to Database successfully!"))
    .catch(err => console.error(err));

require('./geoData.model.js');

const GeoDataRouter = require('./geoData.route.js');

app.use('/routes', GeoDataRouter);

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