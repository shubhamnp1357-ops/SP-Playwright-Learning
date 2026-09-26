import{test, expect} from '@playwright/test';

test('Handle Web Elements',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/');
await page.getByRole('link',{name:'Sortable Data Tables'}).click();
// await page.waitForLoadState('networkidle');
// await page.waitForLoadState('load');








});