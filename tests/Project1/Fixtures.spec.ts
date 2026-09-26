//Fixture-------------------------------- 

import { test, chromium } from '@playwright/test';

test('test with page fixture', async ( {page} ) => {
 
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');



});

test('test with browser fixture', async ({browser}) => {
 
    const context = await browser.newContext();
    const page = await context.newPage();

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.goto('https://www.google.com/');


});

test('test without fixture', async () => {
 
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

await page.goto('https://www.facebook.com/');


});