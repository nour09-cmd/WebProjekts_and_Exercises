const puppeteer = require("puppeteer");
const path = require('path');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

const browserOptions = {
    headless: true,
    defaultViewport: null,
    devtools: false,
    defaultViewport: {
        width:1600,
        height:1200
    }
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
    
    it("'My Blog' heading should exist on the page", async () => {
        const [mainHeading] = await page.$x("//body/*[contains(., 'My Blog')]");
        expect(mainHeading).toBeTruthy()

    });
    it("'My Blog' should be level 1 heading", async () => {
        const [mainHeading] = await page.$x("//h1[contains(., 'My Blog')]");
        expect(mainHeading).toBeTruthy()

    });
    
    it("IMG tags should have `alt` attribute", async () => {
        const imagesAlt = await page.$$eval('img', imgs => imgs.length && !imgs.find(img => !img.getAttribute('alt')))
        expect(imagesAlt).toBeTruthy()
    })
});

describe("Semantic HTML", () => {
    it("Appropriate tags should be used for text content", async () => {
        const tags = await page.$$('h2, h3, p')
        expect(tags.length).toBeGreaterThanOrEqual(7)
    });
    
    it("Footer element should be present on the page", async () => {
        try {
            const footer = await page.$('footer');
            expect(footer).toBeTruthy();
        } catch (err) {
            throw err;
        }
    })
})

describe("CSS Grid", () => {
    it("A grid **columns** setup with 2 columns with widths of `1fr` and `300px` respectively is used", async () => {
        const gridSetup = await page.$$eval('*', els => els.find(el => {
            const gridTemplateColumns = getComputedStyle(el).gridTemplateColumns
            if(gridTemplateColumns === 'none') return false
            let [col1, col2] = gridTemplateColumns.split(' ')
            col1 = parseInt(col1)
            if(col2 !== '300px') return false
            return col1 > 1200 && col1 < 1300
        }));
        expect(gridSetup).toBeTruthy()
    })

    it("A grid **rows** setup with 3 rows with heights 200px each is used", async () => {
        const gridSetup = await page.$$eval('*', els => els.find(el => getComputedStyle(el).gridTemplateRows.includes('200px 200px 200px')));
        expect(gridSetup).toBeTruthy()
    });
    it("A grid **rows** setup with 2 rows with heights 150px each is used", async () => {
        const gridSetup = await page.$$eval('*', els => els.find(el => getComputedStyle(el).gridTemplateRows.includes('150px 150px')));
        expect(gridSetup).toBeTruthy()
    });
})

describe("Layout", () => {
    it("Page matches layout image visually within a margin of 2% (including colors)", async () => {
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            comparisonMethod: 'ssim',
            failureThreshold: 0.02,
            failureThresholdType: 'percent',
            allowSizeMismatch: true,
            blur: 2
        });
    })
})