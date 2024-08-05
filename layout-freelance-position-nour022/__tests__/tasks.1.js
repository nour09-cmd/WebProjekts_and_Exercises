const puppeteer = require("puppeteer");
const path = require('path');
const fs = require('fs');

const browserOptions = {
    headless: true,
    ignoreHTTPSErrors: true,
}

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe('Flexbox and positioning', () => {
    it("Page should be styled with flexbox", async () => {
        const flexBox = await page.$$eval('*', el => Array.from(el).map(e => getComputedStyle(e).getPropertyValue('display')));
        expect(flexBox.some(f => f === 'flex')).toBe(true);
    })
    it("Page should be styled with positioning", async () => {
        const poositions = await page.$$eval('*', el => Array.from(el).map(e => getComputedStyle(e).getPropertyValue('position')));
        expect(poositions.some(f => f !== 'static')).toBe(true);
    })
});

describe('Semantic tags', () => {
    it("Page should contain a Navigation Bar", async () => {
        const nav = await page.$eval('nav', el => el.innerHTML);
        expect(nav).toBeTruthy();
    });
})

describe('Pseudo elements', () => {
    it("'::before' & '::after' Pseudo Elements should be used in CSS", async () => {
        const stylesheetContents = fs.readFileSync(path.resolve('./style.css'), 'utf8');
        expect(stylesheetContents).toMatch(/::before/);
        expect(stylesheetContents).toMatch(/::after/);
    });
})

describe('Z-index', () => {
    it("Bottom Cards on Page Should have a higher 'Z-index' Property on hover", async () => {
        const allElements = await page.$$('body *')
        let notMatching
        for (let el of allElements) {
            const zIndex = await page.evaluate(item => getComputedStyle(item).zIndex, el)
            await el.hover()
            const newZIndex = await page.evaluate(item => getComputedStyle(item).zIndex, el)
            if(zIndex !== newZIndex) {
                notMatching = true
                break
            } 
        }
        expect(notMatching).toBeTruthy()
    });
})

describe('Image', () => {
    it("Page should contain the supplied 'header.png' image from the images folder", async () => {
        const headerImage = await page.$('img[src*="images/header.jpg"]')
        expect(headerImage).toBeTruthy()
    });
})