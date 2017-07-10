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

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})