
// const puppeteer = require('puppeteer');

// (async () => {
//   // Makes the browser to be launched in a headful way
//   const browser = await puppeteer.launch({ headless: false });
//   console.info(browser);
//   const page = await browser.newPage();

// page.on('load', () => console.log('Loaded: ' + page.url()))

// await page.goto('https://www.pepcoding.com');
// //  await browser.close();
// })();


let puppeteer=require('puppeteer');
let browser=puppeteer.launch({headless:false})
browser.then(function(browserInst){
    let newpg=browserInst.newPage();
newpg.then(function(newpg)
{
console.log("new tab open");
let newpgopen=newpg.goto("https://www.pepcoding.com");
newpgopen.then(function(){
console.log("page is open");
})

}) 

})