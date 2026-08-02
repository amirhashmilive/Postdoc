const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const artifactDir = 'C:\\Users\\hashm\\.gemini\\antigravity-ide\\brain\\88a14750-1404-4dca-9bdd-a53471322bac';

const pagesToTest = [
    { name: 'homepage', url: 'http://localhost:8080/index.html' },
    { name: 'about', url: 'http://localhost:8080/src/pages/about.html' },
    { name: 'publications', url: 'http://localhost:8080/src/pages/publications.html' },
    { name: 'phd_research', url: 'http://localhost:8080/src/pages/phd-research.html' },
    { name: 'fellowships', url: 'http://localhost:8080/src/pages/fellowships.html' },
    { name: 'contact', url: 'http://localhost:8080/src/pages/contact.html' }
];

(async () => {
    console.log('🚀 Starting end-to-end site verification...');
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const errors = [];

    for (const p of pagesToTest) {
        const page = await browser.newPage();
        await page.setViewport({ width: 1440, height: 900 });

        page.on('console', msg => {
            if (msg.type() === 'error') {
                errors.push(`[${p.name}] Console Error: ${msg.text()} | Location: ${msg.location().url}`);
            }
        });

        page.on('requestfailed', request => {
            errors.push(`[${p.name}] Failed request: ${request.url()} (${request.failure() ? request.failure().errorText : 'unknown'})`);
        });

        page.on('response', response => {
            if (response.status() >= 400) {
                errors.push(`[${p.name}] ${response.status()} on ${response.url()}`);
            }
        });

        console.log(`Navigating to ${p.name}: ${p.url}`);
        const response = await page.goto(p.url, { waitUntil: 'networkidle2', timeout: 10000 });
        
        if (response.status() !== 200) {
            errors.push(`[${p.name}] HTTP Status: ${response.status()}`);
        }

        const screenshotPath = path.join(artifactDir, `${p.name}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: false });
        console.log(`📸 Saved screenshot: ${screenshotPath}`);

        await page.close();
    }

    await browser.close();

    console.log('\n--- VERIFICATION SUMMARY ---');
    if (errors.length === 0) {
        console.log('✅ PERFECT SUCCESS! All pages loaded with 200 OK and 0 errors!');
    } else {
        console.log('⚠️ ERRORS FOUND:');
        errors.forEach(err => console.log('  -', err));
    }
})();
