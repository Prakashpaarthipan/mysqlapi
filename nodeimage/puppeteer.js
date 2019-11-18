const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.tcsportal.com/approval-desk/print_request_open.php?action=print&reqid=9884&year=2019-20&rsrid=&creid=4&typeid=4', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();
})();