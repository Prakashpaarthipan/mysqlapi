var sql = require('../config/dbconfig.js');
//console.log(db);
//Task object constructor

var Task = function(task){
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.select_query = function (data,callback) {
    
    sql.query(data, function (error, results, fields) {
           
            if(error) {
                console.log("error: ", error);
               // return (error, null);
            }
            else{
                //console.log(results[0].solution);
                return callback(null, results);
            }
        });  
                 
};
Task.select_query2 = function (newTask, result) {    
    sql.query("select 1+1 as solution", newTask, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(result);
                result(null, result);
            }
        });           
};
Task.refreshDB = ()=>{
    //console.log(typeof(sql.threadId));
   // console.log(sql.threadId);
    if(sql.state != 'authenticated'){
        return false;
      }
      else{
          return true;
      }
}
module.exports= Task;
