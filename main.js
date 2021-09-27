
//https://flaviocopes.com/puppeteer/
let pup=require("puppeteer");
let links=["https://www.awazon.com","https://www.flipkart.com"]
let pname=process.args[2]
(async function ()
{
        try {
            let browser= await pup.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized",]
        });
            await getallinks(links[0],browser,pname);
            );
     
        } catch (error) {
            console.log(error);
        }

})();
async function getallinks(links,browser,pname) 
{
    
}
