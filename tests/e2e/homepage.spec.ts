// End-to-end test for homepage
import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/N8N Workflows/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    await page.click('nav a[href="/popular"]');
    await expect(page).toHaveURL('/popular');
    await expect(page.locator('h1')).toContainText('Popular');
  });

  test('should display workflow cards', async ({ page }) => {
    await page.goto('/');
    const workflowCards = page.locator('.workflow-card');
    const count = await workflowCards.count();
    expect(count).toBeGreaterThan(0);
    await expect(workflowCards.first()).toBeVisible();
  });
});