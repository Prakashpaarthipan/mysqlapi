var express = require('express');
const puppeteer = require('puppeteer');
var PromiseFtp = require('promise-ftp');
var fs = require('fs');
var select = require('../controller/select_controller.js');

var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
 //res.status(200);
 //res.send("<br>Welcome To API Server - [ This is Testing JWT Process ] </b>");
//console.log(req.body);
//res.json(req.body);
 var  dataMatch = 12;
 var reqid = req.body.reqid;
 var year = req.body.year;
 var rsrid = req.body.rsrid;
 var creid = req.body.creid;
 var typeid = req.body.typeid;
 var dataMatch=1;
if(reqid =='8988'){
   //res.writeHead(200);
   async function createNew(err,result)
    {
        var today = new Date();
        var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
        var Filename = reqid+"_"+year+"_"+time+"_ap";
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://www.tcsportal.com/approval-desk/print_request_open.php?action=print&reqid='+reqid+'&year='+year+'&rsrid=1&creid='+creid+'&typeid='+typeid, {waitUntil: 'load', timeout: 0});
        await page.pdf({path: 'uploads/'+Filename+'.pdf', format: 'A4'});
        await browser.close();
       
      
        
        var ftp = new PromiseFtp();
        const con = {
            host: "172.16.0.159",
            user: "ituser",
            password: "S0ft@369",
			port:5022,
        };
        ftp.connect(con)
        .then(function (err,result) {
            return ftp.put('uploads/'+Filename+'.pdf', 'approval_desk/request_entry/approval-pdf/'+Filename+'.pdf');
        }).then(function () {
            return ftp.end();
        }); 
        
        res.json(req.body); 
    }
   

    createNew();
}else{
     res.status(200);
     res.send("<br>Welcome To API Server - [ This is Testing JWT Process ] </b><br/> Request May Failed </br>"+JSON.stringify(req.body));
}


});
module.exports = router;