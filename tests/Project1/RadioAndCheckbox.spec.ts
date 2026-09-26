import {test, expect} from '@playwright/test';
test('Handle radio and checkbox', async({page}) =>{
//14/08/2026 Copy Radio and checkbox from group and need to be understand from chat gpt and 

    // await page.goto('https://letode.in/radio');
    // await page.locator('#yes').check();  //difference between check and click
    // const isChecked = await page.locator('#yes')

//how to handle checkbox
    await page.goto('https://letode.in/radio');
    await page.getByLabel('Remember me').uncheck();
    await expect(page.getByLabel('Remember me')).not.toBeChecked();
    
    await page.getByLabel('I agree to the').check();
    await expect (page.getByLabel('I agree to the')).toBeChecked();

    console.log(await page.getByLabel('Maybe').isDisabled());
        console.log(await page.getByLabel('Maybe').isEnabled());

        ///////////////////////////Debugging command///////////////////////////////////////
        //npx playwright test --debug








});