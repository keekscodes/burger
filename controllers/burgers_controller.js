var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');


// Index redirect
router.get('/', function(req, res) {
    // res.redirect('/index');
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});


// Index page (render all burgers to DOM)
// router.get('/index', function(req, res) {
// });


//  Create a new burger
router.post('/api/burgers', function(req, res) {
    burger.insertOne(req.body.burger_name, function(data) {
        res.json(data);
    });
});

// Devour a burger
router.post('/burger/eat/:id', function(req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect('/');
    });
});


// // Export routes
module.exports = router;

// ORIGINAL LOGIC

// var express = require("express");
// var router = express.Router();
// var burger = require('../models/burger.js');


// // Index redirect
// router.get('/', function(req, res) {
//     res.redirect('/index');
// });


// // Index page (render all burgers to DOM)
// router.get('/index', function(req, res) {
//     burger.selectAll(function(data) {
//         var hbsObject = { burgers: data };
//         //console.log(hbsObject);
//         res.render('index', hbsObject);
//     });
// });


// // Create a new burger
// router.post('/burger/create', function(req, res) {
//     burger.insertOne(req.body.burger_name, function() {
//         res.redirect('/index');
//     });
// });


// // Devour a burger
// router.post('/burger/eat/:id', function(req, res) {
//     burger.updateOne(req.params.id, function() {
//         res.redirect('/index');
//     });
// });


// // Export routes
// module.exports = router;