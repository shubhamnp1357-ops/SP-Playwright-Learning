import{test, expect} from "playwright/test";
test('Playwright actions and assertions', async({page})=>{
    
await page.goto('https://xqa.io/practice');
await expect(page).toHaveURL('https://xqa.io/practice');
console.log(await page.title());  //to print the title of the page in console
await expect (page).toHaveTitle(/Practice Exercise/i); //i-(case sensetive can be ignore) to have uppercase /lowercase changes happened so it will handle
//await page.getByRole('link',{name:'Elements', exact:true}).nth(2).click();
await page.getByRole('heading',{name:'Elements'}).click();
await expect (page.getByLabel('Full Name')).toBeVisible();
await page.locator('input#userName').fill('Playwright user');
console.log (await page.locator('input#userName').inputValue());
await expect (page.locator('input#userName')).toHaveValue('Playwright user');
await page.getByPlaceholder('name@example.com').fill('Playwright@example.com');
await page.getByLabel('Current Address').fill('M3 904 Bhalchandra vihar, Ravet');
await page.getByLabel('Permanent Address').pressSequentially('ABC, Umarkhed,Yavatmal'); //previous value ko remove karega and new value ko add karega

await page.getByLabel('Current Address').press('Control+A'); //select all the text in the current address
await page.locator('textarea#currentAddress').clear(); //clear the current adddress
await page.getByLabel('Permanent Address').dblclick();
await page.getByLabel('Permanent Address').press('Backspace'); //delete the text in the permannent Address

//validation
await expect(page.getByLabel('Current Address')).toBeEmpty(); //to check the box empty
await page.locator('textarea#currentAddress').pressSequentially('ABC 1233, near temple') //{Delay:300};
await page.getByLabel('Permanent Address').fill('A-001, near s.b patil school');
await page.getByRole('button',{name:'Submit'}).click();  //.hover for tooltip
await page.getByLabel('Permanent Address').press('Tab'); //move focus to submit button
await page.getByRole('button',{name:'Submit'}).press('Enter');
//await page.locator('div#output').locator('p').first().textContent();
const nameText=await page.locator('div#output').locator('p').first().textContent();
console.log('nameText');
const emailText=await page.locator('div#output').locator('p').nth(1).textContent();
console.log('emailText');
const currentAddressText=await page.locator('div#output').locator('p').nth(2).textContent();
console.log('currentAddressText');
const permanenttAddressText=await page.locator('div#output').locator('p').last().textContent();
console.log('permanentAddressText');
//validations
await expect(page.locator('div#output').locator('p').first()).toHaveText('Name:Playwright user');
await expect(page.locator('div#output').locator('p').nth(1)).toHaveText('Playwright@example.com');

await page.waitForTimeout(3000);
});