var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, false
    ], function() {
        res.redirect("/burgers");
    });
});

router.post("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(data) {
        res.redirect("/burgers");
    });
});

module.exports = router;



// LOGIC 2
// var express = require("express");
// var router = express.Router();
// var burger = require('../models/burger.js');


// // Index redirect
// router.get('/', function(req, res) {
//     res.redirect('/burgers');
// });

// router.get("/burgers", function(req, res) {
//     burger.selectAll(function(data) {
//         var hbsObject = {
//             burgers: data
//         };
//         res.render('index', hbsObject);
//     });
// });

// //  Create a new burger
// router.post('/api/burgers', function(req, res) {
//     burger.insertOne([
//             "burger_name", "devoured"
//         ], [
//             req.body.burger_name, false
//         ],
//         function() {
//             // res.json(data);
//             res.redirect('/burgers');
//         });
// });

// // Devour a burger
// router.post('/api/burgers/:id', function(req, res) {
//     var condition = "id = " + req.params.id;

//     burger.updateOne({
//         devoured: req.body.devoured
//     }, condition, function(data) {
//         res.redirect('/burgers');
//     })


// });



// // // Export routes
// module.exports = router;

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