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
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, function(res) {
            cb(res);
        });
    },

    // Update to update burger devoured state
    updateOne: function(burger_id, cb) {
        orm.updateOne(burger_id, function(res) {
            cb(res);
        });
    },

    //Delete function to throw away/delete burger from database.
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;