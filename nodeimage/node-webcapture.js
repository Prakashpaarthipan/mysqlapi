const captureWebsite = require('capture-website');
var options={
    fullPage:true
};
(async () => {
	await captureWebsite.file('http://www.tcsportal.com/approval-desk/print_request_open.php?action=print&reqid=9884&year=2019-20&rsrid=&creid=4&typeid=4', 'screenshot.pdf',options);
})();