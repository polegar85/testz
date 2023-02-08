// @ts-check
const { test, expect } = require('@playwright/test');

test('Perform login', async ({ page }) => {
	await page.goto('https://www.skroutz.gr/');
	//await page.getByRole('link', { name: 'Σύνδεση / Εγγραφή' }).click();
	await page.click('a.icon');
	await page.getByPlaceholder('Email').click();
	await page.getByPlaceholder('Email').fill('polegar85@gmail.com');
	//await page.getByRole('button', { name: 'Συνέχεια', exact: true }).click();
	await page.click('button.btn-signin.check-email');
	
	await page.getByPlaceholder('Συνθηματικό').click();
	await page.getByPlaceholder('Συνθηματικό').fill('asdfasdf1');
	
	//await page.getByRole('button', { name: 'Σύνδεση' }).click();
	await page.click('button.btn-signin.password-submit');
});


test.only('Add two items to basket', async ({ page }) => {
	await page.goto('https://www.skroutz.gr/');
	const locator = page.locator('input#search-bar-input');
	await locator.fill('keyboard');
	await page.click('button.icon.search-icon');
	//chooses the first item on the grid 
	await page.click('a.js-sku-link.pic') ; 
	await page.click('div.sticky');
	const locator2 = page.locator('input#search-bar-input');
	await locator2.fill('usb drive');
	await page.click('button.icon.search-icon');
	await page.click('a.js-sku-link.pic');
	await page.click('div.sticky');
	await page.click('a.icon.js-mini-cart-link');
	await page.click('a.view-all.btn-green');
	//const loc3 = page.locator('li.mini-cart.hide-small-viewport.hide-medium-viewport.has-items.active');
});
