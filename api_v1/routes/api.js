var express = require('express');
const puppeteer = require('puppeteer');
var PromiseFtp = require('promise-ftp');
var ftpc = require('../config/ftpconfig');
var ftpserv = require('../config/ftpservice');
var fs = require('fs');
const ftp = require("basic-ftp")
var select = require('../controller/select_controller.js');
var router = express.Router();
const client = new ftp.Client();
//client.ftp.verbose = true

/* GET home page. */
router.post('/', function(req, res, next) {

 var  dataMatch = 12;
 var reqid = req.body.reqid;
 var year = req.body.year;
 var rsrid = req.body.rsrid;
 var creid = req.body.creid;
 var typeid = req.body.typeid;
 var dataMatch=1;
if(reqid !='' || 1==1 ){
   //res.writeHead(200);
   async function createNew()
    {
        try{
            console.log('debugger');
            
            var today = new Date();
            var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
            var Filename = reqid+"_"+year+"_"+time+"_AP.pdf";
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            const URL = 'http://www.tcsportal.com/approval-desk/print_request_open.php?action=print&reqid='+reqid+'&year='+year+'&rsrid=1&creid='+creid+'&typeid='+typeid;
            const URL2 = 'https://www.google.com/';
            await page.goto(URL2, {waitUntil: 'load', timeout: 0});
            await page.pdf({path: 'uploads/'+Filename, format: 'A4'});
            await browser.close();          
            const ftpconn = await client.access(ftpc.ftp_config);
            if(ftpconn.code =='220'){
                await ftpserv.fileUpload(client,'uploads/'+Filename,'approval_desk/request_entry/approval-pdf/'+Filename);
                await client.close();
                res.json(req.body); 
            }          
            
        }catch(e){
            console.log('an error occured.'+e);
        }
               
    }
   
    createNew();
}else{
     res.status(200);
     res.send("<br>Welcome To API Server - [ This is Testing JWT Process ] </b><br/> Request May Be Failed </br>"+JSON.stringify(req.body));
}


});
module.exports = router;