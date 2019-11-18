var app = require("node-server-screenshot");
var options = {
    width: 1280,
    height:780,
    waitAfterSelector:"html",
    waitMilliseconds:30000
};
app.fromURL("http://www.tcsportal.com/approval-desk/print_request_open.php?action=print&reqid=9884&year=2019-20&rsrid=&creid=4&typeid=4", "test.jpg",options, function(){
    //an image of google.com has been saved at ./test.png
});