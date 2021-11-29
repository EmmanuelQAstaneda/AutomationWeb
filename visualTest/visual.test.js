const puppeteer = require("puppeteer");
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

describe("Visual test", () => {
  let browser;
  let page;

  test("captura", async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("https://www.example.com/");
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      failureThresholdType: "pixel",
      failureThreshold: 500
    });

    await browser.close();
  });
});
