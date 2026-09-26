/*What is Alert?
An alert is a popup window that displays a message to user 

Types of Dialog

1. Simple Alert -- it shows a message with ok button
2. Confirmation Dialog - it shows a message with ok and cancel button
3. Prompt Dialog -   it shows a message with a text input field and  ok/cancel button
4. Modern Alert -  A style modal dialog ( its not browser alert)

Dialog action 

dialog.accept()  --- click ok button 
dialog.dismiss() --- click on cancel button 
dialog.type() -------Get the type of dialog(whether it is simple alert, confirmaton alert, or promt)
dialog.message-------Get the message text from the dialog
*/

import {test, expect} from '@playwright/test';

test('Handle simple alert', async({page})=>{

await page.goto('https://letcode.in/alert');

page.on('dialog', async dialog=>{

    console.log(dialog.message());
    await dialog.accept();

});
await page.getByRole('button', {name:'Simple Alert'}).click();

await page.waitForTimeout(5000);

});


test('confirm alert', async({page})=> {

await page.goto('https://letcode.in/alert');

page.on('dialog', async dialog=>{

    console.log(dialog.message());
    await dialog.dismiss();

});
await page.getByRole('button', {name:'Confirm Alert'}).click();

await page.waitForTimeout(5000);
});

test.only('prompt alert', async({page})=> {

await page.goto('https://letcode.in/alert');

page.on('dialog', async dialog=>{

    console.log(dialog.message());
    console.log(dialog.type());
    await dialog.accept('Playwright Alert');

});


await page.locator('#prompt').click();

await page.waitForTimeout(5000);

//Altnate approach to handle alert if alert is already known
// const [dialog] = await Promise.all([
//     page.waitForEvent('dialog'),
//     page.locator('#prompt').click(),
// ]);

// console.log("I reached here");
// await dialog.accept('Playwright Alert');


});


test('modern alert', async({page})=>{

await page.goto('https://letcode.in/alert');

await page.getByRole('button', {name:'Modern Alert'}).click();

console.log(await page.locator('.modal-content').textContent());

await page.locator('.modal-close').click();

await page.waitForTimeout(5000);




});