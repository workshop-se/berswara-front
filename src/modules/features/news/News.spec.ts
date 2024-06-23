import { test, expect } from '@playwright/test'
 
test('should navigate to the about page', async ({ page }) => {
  await page.goto('http://localhost:3000/News')
  page.waitForTimeout(1000)
  await expect(page.locator('h1')).toContainText('About')
})
