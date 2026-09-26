import {test, expect} from '@playwright/test';

//How to use waits in playwright

//Auto waiting-element>visible, enabled, attched, stable, in viewport
//Page loads states-'load,'domcontentloaded,'networkidle'

test('Waits and Sync',async({page})=>{
await page.goto('https://automationexercise.com/');

//page realted
//check HTML content loaded or not
await page.waitForLoadState('domcontentloaded');

//load-HTML,css, images,script
await page.waitForLoadState('load');

//Network Request
await page.waitForLoadState('networkidle')

//Element states 
await page.locator('h2.title.text-center').waitFor({state:'attached',timeout:15000});
await page.locator('h2.title.text-center').waitFor({state:'visible',timeout:15000});
await page.locator('h2.title.text-center').waitFor({state:'detached',timeout:15000});
await page.locator('h2.title.text-center').waitFor({state:'hidden',timeout:15000});

//expect
await expect(page.locator('#Shopping card')).toBeVisible();

await page.locator('h2.title.text-center').waitFor({state:'attached',timeout:15000});
await page.locator('#Proceed').click();

//wait for event trigger
await page.waitForEvent('dialog');

//wait for url
await page.locator('#Products').click();
await page.waitForURL('https://automationexercise.com/products');

//Hard waits
await page.waitForTimeout(5000);





});
