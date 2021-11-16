const puppeteer = require("puppeteer");

async function startBrowser() {
  let browser;
  try {
    console.log("popcat.click Auto Clicker");
    console.log("By: Ahmed Altommy - PlusSoftJO +962789665181");
    console.log("Wait, Will open browser ........");
    browser = await puppeteer.launch({
      executablePath:
        "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
      headless: false,
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.log("Could not create a browser instance => : ", err);
  }
  return browser;
}

module.exports = {
  startBrowser,
};
