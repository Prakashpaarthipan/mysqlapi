
var Task1 =  require('../model/select.model.js');
exports.select_query_json1 = function(err, result) {
    //var task = new Task1(req.body);
    //console.log(res);
    Task1.select_query(function(err, result) {
  
      console.log('controller')
      if (err){ 
          res.send(err);
      }else{
           return result;
      }
    });
  };
  exports.select_query_json = (data,callback) => {
    //var task = new Task1(req.body);
    //console.log(data.req);
    var fundata=[];
     Task1.select_query(data,function(err, result) {  
      //console.log('controller');
      if (err){ 
        console.log(err.message);
      }else{
        //
       fundata.users=result;
       //callback(null,result);
       
      }
    });
    
      var data= "select * from task";
      Task1.select_query(data,function(err,result){
        if(err){       
          console.log("Error");
        }else{
          fundata.task=result;
          callback(null,fundata);
        }
      });
  };

  exports.checkDB = ()=>{
     return Task1.refreshDB();
  }