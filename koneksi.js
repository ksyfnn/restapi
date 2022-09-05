var mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_test'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('connection failed');
});

module.exports= conn;