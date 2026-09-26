import {test, expect} from '@playwright/test';


test('Handle child window', async({page, context})=>{

await page.goto('https://letcode.in/window');

console.log(page.url());


const [newPage] = await Promise.all([

context.waitForEvent('page'),
await page.getByRole('button', {name: 'Open Home Page'}).click()


]);  //pass

await newPage.waitForLoadState();

console.log(newPage.url());

await newPage.getByRole('link', {name: 'Contact'}).click();

await expect(newPage.getByRole('heading', {name: 'Koushik Chatterjee'})).toBeVisible();

await page.bringToFront();

//await newPage.bringToFront();

await newPage.close();


await page.waitForTimeout(5000);


//Examples for multiple tabs

// const [viewApplicatoionTab] = await Promise.all([

// context.waitForEvent('page'),
// await page.getByRole('button', {name: 'viewApplicatoion'}).click()


// ]); 

// const [inboxTab]= await Promise.all([

// context.waitForEvent('page'),
// await page.getByRole('button', {name: 'Inbox'}).click()



//Alternate way to handle child tab

//const newPagePromise = context.waitForEvent('page');

//await page.getByRole('button', {name: 'Inbox'}).click();

//const inboxPage = await newPagePromise;

});