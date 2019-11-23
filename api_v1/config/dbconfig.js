var mysql=require('mysql');
var db_config = {
  host:'localhost',
  user:'root',
  password:'',
  database:'nodeapi'
};
var dbcon;
dbcon=mysql.createConnection({ 
 host:'localhost',
 user:'root',
 password:'',
 database:'nodeapi'
 
});
dbcon.connect(function(err) {
    if (err) {
        handleDisconnect();
        return console.error('error: ' + err.message + ' [ Mysql Server May be Offline ]');
        
      }
});
 module.exports=dbcon;

 function handleDisconnect() {
  dbcon=mysql.createConnection({ 
    host:'localhost',
    user:'root',
    password:'',
    database:'nodeapi'
    
   });
    dbcon.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err.code);
       //
    }                                    

    if(err.code === 'ECONNREFUSED'){
      console.log("Reconnecting...");
      //handleDisconnect();  
      setTimeout(handleDisconnect, 5000); 
    } 
    else{
      clearTimeout();
    } 

  });                               
   
}
 

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