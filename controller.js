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

// tampil id
exports.tampilId = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM tb_test WHERE id = ?', [id],
    function(error, rows, fields) {
        if (error){
            connection.log(error);
        }
        response.ok(rows,res);
    });
    
};

// menambahkan data

exports.tambahData = function(req,res){
    var nama = req.body.nama;
    var umur = req.body.umur;
    var hobi = req.body.hobi;

    connection.query('INSERT INTO tb_test (nama,umur,hobi) VALUES (?,?,?)',
    [nama, umur, hobi],

    function(error, rows, fields){
        if (error) {
            console.log(error);
        } else {
            response.ok("add data success",res);
        }
    });
};

// edit data berdasarkan id

exports.editData = function(req,res){
    var id = req.body.id;
    var nama = req.body.nama;
    var umur = req.body.umur;
    var hobi = req.body.hobi;

    connection.query('UPDATE tb_test SET nama=?, umur=?, hobi=? WHERE id=?', [nama,umur,hobi,id],
        function(error,rows,fields){
            if (error) {
                console.log(error);
            } else {
                response.ok("update data success",res);        
            }
        });
}