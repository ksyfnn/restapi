"use strick"

var response = require('./rest');
var connection = require('./koneksi');
const { response } = require('express');

exports.index = function(req, res){
    response.ok("app rest API has started")
};