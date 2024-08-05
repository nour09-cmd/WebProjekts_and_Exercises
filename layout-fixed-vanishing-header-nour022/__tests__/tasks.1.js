const puppeteer = require("puppeteer");
const path = require('path');

const browserOptions = {
    headless: true,
    ignoreHTTPSErrors: true,
    defaultViewport: null,
    devtools: false,
}
let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
});

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
}, 30000);

describe("HTML Basics", () => {
    it("`index.html` should contain appropriate meta tags", async () => {
        try {
            const metaTags = await page.$$('meta');
            expect(metaTags.length).toBeGreaterThan(1);
        } catch (err) {
            throw err;
        }
    });
    it("`index.html` should contain a title tag that is not empty", async () => {
        try {
            const title = await page.$eval('title', el => el.innerHTML);
            expect(title).not.toBe('');
        } catch (err) {
            throw err;
        }
    });
});

describe("Navbar", () => {
    it("Nav element exists and contains list with 5 items", async () => {
        try {
            const navbarItems = await page.$$('nav ul li');
            expect(navbarItems.length).toBe(5);
        } catch (err) {
            throw err;
        }
    });
    it("Navbar should stick to the top of the page when scrolling", async () => {
        try {
            await page.evaluate(() => {
                window.scrollTo(0, 1000);
            });
            await page.waitForTimeout(1000);
            const navbar = await page.$('nav');
            const navbarTop = await navbar.boundingBox();
            expect(navbarTop.y).toEqual(0);
        } catch (err) {
            throw err;
        }
    });
})

describe("Header", () => {
    it("Header element exists and has a background image", async () => {
        try {
            const header = await page.$eval('header', el => getComputedStyle(el).backgroundImage);
            expect(header).toContain('url');
            expect(header).toBeTruthy();
        } catch (err) {
            throw err;
        }
    })
    it("Header Should stay fixed to it's position when scrolling", async () => {
        try {
            await page.evaluate(() => {
                window.scrollTo(0, 1000);
            });
            await page.waitForTimeout(1000);
            const header = await page.$('header');
            const headerTop = await header.boundingBox();
            expect(Math.floor(headerTop.y)).toEqual(-953);
        } catch (err) {
            throw err;
        }
    });
})