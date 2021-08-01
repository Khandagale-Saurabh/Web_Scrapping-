let puppeter=require("puppeteer")
let page;
let {email,password}=require('../fact/secret.js');
console.log(email+" "+password)
let browser=puppeter.launch(
    {
        headless:false,
        defaultViewport:null,
        args:["--incognito","--start-maximized"]
    }
    )

browser.then(function(Instance){
let newpage=Instance.newPage();
return newpage;
}).then(function(newTab){
 let open_page=   newTab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
 //ui-btn ui-btn-normal ui-btn-line top-banner-cta ui-btn-link ui-btn-styled
 //page.
 page=newTab
 console.log(" ------------------ "+open_page);
return open_page;
}).then(function(){
    console.log("OPEN PAGE");
    let emailenter=page.type("#input-1",email,{delay:00});
    return emailenter
}).then(function(){
    let passenter=page.type("#input-2",password,{delay:1});
    return passenter;
}).then(function()
{
    let cc=page.click("button[data-analytics='LoginPassword']");
    return cc;
})
.then(function()
{
    return  page.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-secondary.verifiable-skill-promo-card-cta.ui-btn-styled");


}).then(function()
{
     let click1=page.click(".ui-btn.ui-btn-normal.ui-btn-secondary.verifiable-skill-promo-card-cta.ui-btn-styled")

 //console.log(""+click1)
 return click1;
}).then(function()
{
    let algo=page.goto("https://www.hackerrank.com/domains/algorithms");
    return algo;
}).then(function(){
   return page.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");
}).then(function(){
let solve1=page.click(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");
return solve1;
}).then(function(){
    return page.waitForSelector("div[data-attr2='Editorial']");
}).then(function(){
    let edito=page.click("div[data-attr2='Editorial']");
    return edito
}).then(function(){
    return page.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled")
})
.then(function(){
    let getsolve=page.click(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled");
    return getsolve;
})
.then(function()
{
let Questionpage=page.goto("https://www.hackerrank.com/interview/interview-preparation-kit/warmup/challenges");
return Questionpage;
}).then(function(){
    let arr=[]
    let ele=document.querySelectorAll('h4')
    arr.push(ele);

    for(let i=0;i<arr.length;i++)
    {
     console.log(arr[i]);
    }
})


