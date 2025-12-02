import { test, expect } from '@playwright/test';

test('EPAM Client Work Test', async ({ page }) => {
  // 1. Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');

  // 2. Maximize browser
  await page.setViewportSize({ width: 1920, height: 1080 });

  // 3. Select "Services" from the header menu
  await page.locator('span').filter({ hasText: 'Services Services' }).getByRole('link').click();

  // 4. Click the "Explore Our Client Work" link
  await page.getByText('Explore Our Client Work').nth(1).click();

  // 5. Verify that the "Client Work" text is visible on the page
  await expect(page.locator('text=Client Work')).toBeVisible();

  // 6. Take a screenshot and save it
  await page.screenshot({ path: 'client-work-page.png', fullPage: true });

  // 7. Close the opened browser
  await page.close();
});