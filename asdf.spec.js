// @ts-check
const { test, expect } = require('@playwright/test');

test('visit page', async ({ page }) => {
  await page.goto('https://skroutz.gr/');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/kroutz/);
});
