const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GeojsonfeatureSchema = new Schema({
    type: { type: String },
    features: [{
        type: { type: String },
        geometry: {
            type: { type: String },
            coordinates: [[
                {
                    type: Number,
                    'index': '2dsphere',
                    'required': true
                }]]
        },
        properties: {
            name: String,
            time: Date,
            coordTimes: [{ type: Date }]
        }
    }]
});

var GeoData = mongoose.model('GeoData', GeojsonfeatureSchema);

module.exports = GeoData;
