// Import the ORM 
var orm = require("../config/orm.js");

var burger = {
    // Select all burgers from database
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },

    // Create to create/add a burger
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    // Update to update burger devoured state
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;