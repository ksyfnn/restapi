"use strick"

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("app rest API has started",res)
};

// menampilkan data

exports.tampilData = function(req,res){
    connection.query('SELECT * FROM tb_test', function(error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};