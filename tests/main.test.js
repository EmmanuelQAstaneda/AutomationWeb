const puppeteer = require("puppeteer");
const expect = require("chai").expect;

describe("Hola mundo", () => {
  let browser, page;
  it("alo", async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("https://www.youtube.com/");
    await browser.close();
  });
});
