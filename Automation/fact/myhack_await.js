let pup=require('puppeteer')
let {email,password}=require('../fact/secret.js')
let {codes}=require('../fact/codes')
//console.log(email,password);
//console.log(" "+codes);
console.log("Before");

 (async function(){
   try{
    let page=  await pup.launch({
          headless:false,
          defaultViewport:null,
          args:['--start-maximized',]
      });
     let newtab= await page.newPage();
     await newtab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
    await newtab.type("#input-1",email);
    await newtab.type("#input-2",password);
    await newtab.click("button[data-analytics='LoginPassword']");
     await newtab.waitForSelector("a[id='base-card-1-link']");
     await newtab.click("a[id='base-card-1-link']");
    await newtab.waitForSelector("a[id='base-card-6-link']");
     await newtab.click("a[id='base-card-6-link']");
     let url=newtab.url()
     
     }
     
catch(err){console.log(err);}
 })();


 