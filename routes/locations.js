var express = require('express');
var router = express.Router();
var Location = require('../models/location');

router.get('/', function(req, res) {
    Location.find(function(err, locations) {
        if (err) {
            return res.send(err);
        }
        res.json(locations);
    });
});

router.post('/', function(req, res) {
    var location = new Location(req.body);
    location.markModified('meta');
    location.save(function(err, loc) {
        if (err) {
            return res.send(err);
        }
        res.json(loc);
    });
});

router.get('/:id', function(req, res) {
    Location.findById(req.params.id, function(err, location) {
        if (err) {
            return res.send(err);
        }
        res.json(location);
    });
});

router.put('/:id', function(req, res) {
    Location.findByIdAndUpdate(req.params.id, req.body, function(err, location) {
        if (err) {
            return res.send(err);
        }
        res.json(location);
    });
});

router.delete('/:id', function(req, res) {
    Location.remove({
        _id : req.params.id
    }, function(err, bear) {
        if (err) {
            return res.send(err);
        }
        res.send(200);
    });
});

module.exports = router;