import {test, expect} from "@playwright/test";

test('Sauce demo login with playwright locators',async({page}) =>{
page.goto('https://www.saucedemo.com');
await expect(page).toHaveTitle(/Swag Labs/);    //validation
await expect(page.getByText('Swag Labs')).toBeVisible();  //validation
await page.getByRole('textbox',{name:'Username'}).fill('standard_user');
await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce');
await page.getByRole('button',{name:'Login'}).click();
await expect(page.getByText('Products')).toBeVisible();  //validation
await page.waitForTimeout(5000);





});

