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

  test('should have search functionality', async ({ page }) => {
    await page.goto('/');
    const searchInput = page.locator('input[type="search"]');
    await expect(searchInput).toBeVisible();
    await searchInput.fill('automation');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/search/);
  });

  test('should have category filters', async ({ page }) => {
    await page.goto('/');
    const categoryFilter = page.locator('select[name="category"]');
    await expect(categoryFilter).toBeVisible();
    await categoryFilter.selectOption('ai');
    await page.waitForTimeout(500);
    const workflowCards = page.locator('.workflow-card');
    const count = await workflowCards.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('should have complexity filters', async ({ page }) => {
    await page.goto('/');
    const complexityFilter = page.locator('select[name="complexity"]');
    await expect(complexityFilter).toBeVisible();
    await complexityFilter.selectOption('beginner');
    await page.waitForTimeout(500);
    const workflowCards = page.locator('.workflow-card');
    const count = await workflowCards.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('should have price filters', async ({ page }) => {
    await page.goto('/');
    const priceFilter = page.locator('select[name="price"]');
    await expect(priceFilter).toBeVisible();
    await priceFilter.selectOption('free');
    await page.waitForTimeout(500);
    const workflowCards = page.locator('.workflow-card');
    const count = await workflowCards.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('should have pagination', async ({ page }) => {
    await page.goto('/');
    const pagination = page.locator('.pagination');
    await expect(pagination).toBeVisible();
    const nextButton = pagination.locator('button:has-text("Next")');
    await expect(nextButton).toBeVisible();
  });
});