const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {

    let location = {
        'origin': {

            lat: 6.831755433557095,
            lng: 79.87189292907715
        },
        'destination': {
            lat: 6.913134792031119,
            lng: 79.85090732574463
        },
        'waypoints': [{
            location: {
                lat: 6.848373291775688,
                lng: 79.86906051635742
            },
            stopover: true
        }, {
            location: {
                lat: 6.900657174189114,
                lng: 79.85375046730042
            },
            stopover: true
        }]
    }

    res.json(location);
});

module.exports = router;