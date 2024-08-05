const puppeteer = require("puppeteer");
const path = require('path');

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe('Grid and Flexbox', () => {
    it("`.container` should be set to `grid`", async () => {
        const containerDisplay = await page.$eval('.container', (el) => getComputedStyle(el).display);
        expect(containerDisplay).toBe('grid');
    });
    it("`grid` should have total of 4 columns", async () => {
        const containerGridTemplateColumns = await page.$eval('.container', (el) => getComputedStyle(el).gridTemplateColumns);
        expect(containerGridTemplateColumns).toBe('190px 190px 190px 190px');
    });
    it("`grid` items should have '0.5em' spacing", async () => {
        const containerGridGap = await page.$eval('.container', (el) => getComputedStyle(el).gap);
        expect(containerGridGap).toBe('8px'); // Equivalent to 0.5em
    });
    it("`grid` items should be positioned vertically with flexbox and centered", async () => {
        const gridItemsDisplay = await page.$eval('.container  *', (el) => getComputedStyle(el).display);
        const gridItemsPosition = await page.$eval('.container  *', (el) => getComputedStyle(el).alignItems);
        expect(gridItemsDisplay).toBe('flex');
        expect(gridItemsPosition).toBe('center');
    });
    it("`grid` items' text color should be `#eee`", async () => {
        const gridItemsColor = await page.$eval('.container  *', (el) => getComputedStyle(el).color);
        expect(gridItemsColor).toBe('rgb(238, 238, 238)');
    });
});
describe('Hover', () => {
    it("`grid` items should have a 'box-shadow' on hover", async () => {
        await page.hover('.container  *');
        const gridBoxShadow = await page.$eval('.container  *', (el) => getComputedStyle(el).boxShadow);
        expect(gridBoxShadow).not.toBe('none');
    });
});