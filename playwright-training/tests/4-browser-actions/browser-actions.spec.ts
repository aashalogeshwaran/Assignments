import {test, expect, chromium} from '@playwright/test';

test('Browser actions' , async({page}) => {
    const browser = await chromium.launch({channel: 'chrome', headless: false});
    // const context = await browser.newContext();
    // await context.clearCookies();
    // //const page = await context.newPage();

    //await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.youtube.com/');
    await page.waitForTimeout(10000);
    await expect(page).toHaveTitle(/YouTube/);
    await page.locator('xpath=//*[@id="center"]/yt-searchbox/div[1]/div/form/input').fill('Pavazhamalli song');
    await page.locator('xpath=//*[@id="center"]/yt-searchbox/div[1]/button/span/span/div').click();
    //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    await page.waitForTimeout(10000);
    //await page.locator('xpath=(//*[@id="thumbnail"]/yt-image/img)[1]').click();
    //await page.waitForTimeout(10000);
    const context = await browser.newContext();
    const newpage = await context.newPage();
    await newpage.goto('https://www.google.com/');
    await expect(newpage).toHaveTitle(/Google/);
    await newpage.locator('xpath=//*[@id="APjFqb"]').fill('marvel movies');
    await newpage.waitForTimeout(3000);
    await newpage.locator('xpath=//*[@id="APjFqb"]').press('Enter');
    //await newpage.waitForTimeout(10000);
    // await page.bringToFront();
    // await page.waitForTimeout(10000);
    await browser.close();
});

//locators:
// getByRole('heading', { name: 'Installation' })