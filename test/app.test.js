// Sanity check to ensure viewer initializes correctly with required objects.
const path = require('path');
const puppeteer = require('puppeteer');

describe('Viewer initialization', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    const filePath = 'file://' + path.join(__dirname, '..', 'index.html');
    await page.goto(filePath);
    await page.waitForSelector('#viewer canvas');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('viewer element contains canvas', async () => {
    const canvasExists = await page.$('#viewer canvas') !== null;
    expect(canvasExists).toBe(true);
  });

  test('scene contains house and ground', async () => {
    const result = await page.evaluate(() => {
      const scene = window.viewerScene;
      return {
        hasHouse: !!scene.getObjectByName('house'),
        hasGround: !!scene.getObjectByName('ground')
      };
    });
    expect(result.hasHouse).toBe(true);
    expect(result.hasGround).toBe(true);
  });
});
