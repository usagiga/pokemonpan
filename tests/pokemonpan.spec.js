// @ts-check
import { test, expect } from '@playwright/test';

test('has goodra', async ({ page }) => {
  await page.goto('https://www.daiichipan.co.jp/decochar/');

  // Expect daiichipan page
  await expect(page).toHaveTitle(/第一パン/);

  // Get edition

  // Get pokemon stickers

  // Examine favorite pokemon has

  // To take screenshot, wait for all images are loaded
  const images= await page.locator('img').all();
  const promises = images.map(
    image => image.evaluate(
      elem => {
        console.log(`src = ${elem.src}`);
        elem.scrollIntoViewIfNeeded();
        return elem.complete || new Promise(resolve => elem.onload = resolve);
      }
    )
  );
  await Promise.all(promises);

  // Take screenshot
  await page.screenshot({ path: './tmp/screenshot.png', fullPage: true });

  // Send summary to Discord
});
