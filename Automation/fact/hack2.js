// const puppeteer = require('puppeteer')

// const options = {
  
//   headless: false,
//   defaultViewport: null,
//   args: ['--window-size=1920,1080'],
// }


// ;(async () => {
//   const browser = await puppeteer.launch(options)
//   const page = await browser.newPage()
//   await page.goto('https://gulshansainis.github.io/portfolio/')
//   const head1=await page.$eval('body > header > h1',e1=>e1.textContent);

//  console.log(head1);
// let yy=await page.$eval('#contact > h2',w1=>w1.textContent);
// console.log("    "+yy);
//   await page.type("#first_name","ABC");
//   await page.type("#last_name","LAST NAME");
//   await page.type("#email","abc@gmail.com")
//   await page.click("#contact-form > div > input[type=submit]");
//   console.log("CLICK");
// })()


//let aa="Saurabh Khandagale"
//console.log(...aa);
var shortcutsToCapture = ['Ctrl+Alt+Delete', 'Alt+F4','CommandOrControl+A','Super+Alt+Tab','CommandOrControl+Shift+I', 'CommandOrControl+R']

// this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent(app)) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
}

app.on('ready', function () {

  captureShortcuts(shortcutsToCapture)
})

function captureShortcuts(shortcuts) {
  shortcuts.forEach(function (shortcut) {
    registerShortcutCapturing(shortcut)
  })
}

function registerShortcutCapturing(shortcut) {
  var result = globalShortcut.register(shortcut, function () {
    console.log('<' + shortcut + '> captured!')
  })

  if (!result) {
    console.log('<' + shortcut + '> registration failed!')
  }
}

app.on('will-quit', () => {
  // Unregister a shortcut.
  globalShortcut.unregister('CommandOrControl+X')

  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
})