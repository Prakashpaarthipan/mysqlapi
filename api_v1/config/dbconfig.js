var mysql=require('mysql');
var dbcon=mysql.createConnection({ 
 host:'localhost',
 user:'root',
 password:'',
 database:'nodeapi'
 
});
dbcon.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message + ' [ Mysql Server May be Offline ]');
      }
});
 module.exports=dbcon;

exports.dbClose= ()=>{
    dbcon.end(function(err) {
        if (err) {
            return console.error('error: ' + err.message);
          }
    });
 }
 
 /**
  * var pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'todoapp'
});
pool.getConnection(function(err, connection) {
  // execute query
  // ...
  connnection.release();
});
pool.end(function(err) {
  if (err) {
    return console.log(err.message);
  }
  // close all connections
});
  */