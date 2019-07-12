var mysql = require('mysql');

require("dotenv").config();

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect(function(error) {
    if (error) {
        console.log("error connecting to: " + error.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
})

module.exports = connection;