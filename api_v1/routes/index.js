var express = require('express');
var select = require('../controller/select_controller.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'  });
});
router.post('/data', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  error = {
    status:"404",
    stack:"Try to access invalid resources"
  }
  //console.log(req.body);
  var QueryData; var data;
  if(select.checkDB()){
    data={
      "req":req.body,
      "qry":"select * from user_basic"
    } 
    const d = select.select_query_json(data.qry,function(err,result){
      if(err){       
        console.log("Error");
      }else{
        QueryData = {
          "qry1":result
        }
        var cou = Object.keys(QueryData).length;
        //res.send( 'Query Count :' + cou);
        if(cou > 0){
          res.send(  QueryData);
        }else{
          res.send(  'No Data Retrived from Database');
        }
        
      }
    });
   

    
  }else{
   // res.send("failed to connect");
    console.log('Database Connection is failed');
  }

  //res.render('error', { title: 'Express',message:'Error',error });

});

module.exports = router;
