import {test, expect} from '@playwright/test'


test('Handle Static dropdown using select tag', async({page})=>{

page.goto('https://letcode.in/dropdowns');

await expect(page.getByRole('heading', {name:'Dropdown'})).toBeVisible();

await page.locator('#fruits').selectOption({value:'0'})

//await expect(page.locator('#fruits').locator('option')).toHaveText('Apple')
await expect(page.getByText('You have selected Apple')).toBeVisible()
//await expect(page.getByText('Apple')).toBeVisible()   // strict mode voilation error

await expect(page.locator('#fruits')).toContainText('Apple')

await page.waitForTimeout(5000);


await page.locator('#fruits').selectOption('Orange');

await expect(page.getByText('You have selected Orange')).toBeVisible()

await page.locator('#fruits').selectOption({label:'Mango'});

await expect(page.getByText('You have selected Mango')).toBeVisible()

await page.locator('#fruits').selectOption({index: 3 });

await expect(page.getByText('You have selected Orange')).toBeVisible()

await page.locator('#fruits').click();
await page.getByText('Orange').click()


});

test('MultiSelect Dropdown', async({page})=>{

await page.goto('https://letcode.in/dropdowns');

await expect(page.getByRole('heading', {name:'Dropdown'})).toBeVisible();

await page.locator('#superheros').selectOption([
    'Aquaman',
    'Batman',
    'Captain America'

    ]);

await expect(page.getByText('You have selected Aquaman, Batman, Captain America')).toBeVisible();

await page.waitForTimeout(5000);


});

test('Select the lastProgramming language and print all the options', async({page})=>{

await page.goto('https://letcode.in/dropdowns');

const dropdown=  page.locator('#lang');

const dropdownOptions= await dropdown.locator('option').allTextContents();

console.log(dropdownOptions);

const optionCount = await dropdown.locator('option').count() //

await dropdown.selectOption({index:optionCount-1}) //

await expect(page.getByText('You have selected C#')).toBeVisible();

await page.waitForTimeout(5000);



});

test.only('Auto Suggestion select', async({page})=>{


await page.goto('https://www.wikipedia.org/');

await page.getByLabel('Search Wikipedia').fill('India')

await page.locator('.suggestions-dropdown').waitFor({state:'visible', timeout:15000})

const suggestionLinks = page.locator('a.suggestion-link');

const suggestionLinksCount = await suggestionLinks.count()

console.log( suggestionLinksCount);

await suggestionLinks.filter({hasText:'Indian National Congress'}).click();

await expect(page.getByRole('heading', {name:'Indian National Congress'})).toBeVisible()

await page.waitForTimeout(5000) 

});