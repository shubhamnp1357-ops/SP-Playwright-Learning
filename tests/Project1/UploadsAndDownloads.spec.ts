

import {test, expect} from '@playwright/test';


// How to Handle Uploads and Downloads


test('File Upload with input tag', async({page})=>{

await page.goto('https://letcode.in/file');

//validation

await page.setInputFiles("input[type='file']", "C:/Users/Admin/Downloads/sample.xlsx")   //  "C:\Users\Admin\Downloads\sample.xlsx"
//Alternate way as below..
//await page.locator("input[type='file']").setInputFiles("C:/Users/Admin/Downloads/sample.xlsx");
await expect(page.getByText('sample.xlsx')).toBeVisible();


} );

test('File Uploads Without Input Tag', async({page})=>{

await page.goto('http://trace.playwright.dev/');


const [filechooser] = await Promise.all([

page.waitForEvent('filechooser'),
await page.getByRole('button', {name:'Select file'}).click()

]);

await filechooser.setFiles("C:/Users/Admin/Downloads/trace.zip");

await page.waitForTimeout(5000);

await expect(page.locator('.title').first()).toContainText('HandleAlert.spec.ts');

await expect(page.getByText('HandleAlert.spec.ts:47 › Modern Alert')).toBeVisible();


});

test('Upload Multiple Files', async({page})=>{

await page.goto('https://letcode.in/file');

await page.setInputFiles("input[type='file']", ["C:/Users/Admin/Downloads/sample.xlsx",
    "C:/Users/Admin/Downloads/test-failed-123bfaac7-59c0-498e-94d5-79ca28299760.png",
    "C:/Users/Admin/Downloads/0981d13c24cdfb4ffbd84ae5e9280f93eef4315d.md"
]);

await expect(page.getByText('test-failed-123bfaac7-59c0-498e-94d5-79ca28299760.png')).toBeVisible();    


});

test.only('File Downloads', async({page})=>{

await page.goto('https://letcode.in/file');

const [download]= await Promise.all([

page.waitForEvent('download'),   //pending // fullfill //reject
await page.getByRole('link', {name: 'Download Excel'}).click()

]);

await download.saveAs('.uploads/excel-download.xlsx');


await page.waitForTimeout(5000);



});







