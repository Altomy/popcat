const scraperObject = {
  url: "https://popcat.click/",
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
    console.log(`Enjoy :)`);
    await page.waitForSelector("#app");
    for (let index = 0; index < 999999999999; index++) {
      await page.click("#app");
    }
    for (let index = 0; index < 999999999999; index++) {
      await page.click("#app");
    }
    for (let index = 0; index < 999999999999; index++) {
      await page.click("#app");
    }
  },
};

module.exports = scraperObject;
