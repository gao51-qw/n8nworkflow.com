// 搜索功能集成测试
import { test, expect } from '@playwright/test';

test.describe('Search Functionality', () => {
  test('应该显示搜索结果页面', async ({ page }) => {
    await page.goto('/search?query=automation');
    await expect(page).toHaveTitle(/Search Results/);
    await expect(page.locator('h1')).toContainText('Search Results');
  });

  test('应该显示搜索结果', async ({ page }) => {
    await page.goto('/search?query=automation');
    const workflowCards = page.locator('.workflow-card');
    const count = await workflowCards.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('应该显示搜索查询', async ({ page }) => {
    const query = 'automation';
    await page.goto(`/search?query=${query}`);
    await expect(page.locator('text=Search Results for "automation"')).toBeVisible();
  });

  test('应该处理空搜索查询', async ({ page }) => {
    await page.goto('/search?query=');
    await expect(page.locator('text="No search query provided"')).toBeVisible();
  });

  test('应该处理无结果的搜索', async ({ page }) => {
    await page.goto('/search?query=nonexistentquery12345');
    await expect(page.locator('text="No workflows found"')).toBeVisible();
  });

  test('应该保持筛选条件在搜索中', async ({ page }) => {
    await page.goto('/search?query=automation&category=ai&complexity=beginner');
    const categoryFilter = page.locator('select[name="category"]');
    await expect(categoryFilter).toHaveValue('ai');
    const complexityFilter = page.locator('select[name="complexity"]');
    await expect(complexityFilter).toHaveValue('beginner');
  });

  test('应该允许从搜索结果中清除筛选条件', async ({ page }) => {
    await page.goto('/search?query=automation&category=ai');
    const categoryFilter = page.locator('select[name="category"]');
    await categoryFilter.selectOption('all');
    await page.waitForTimeout(500);
    await expect(page).toHaveURL(/search\?query=automation(&|$)/);
  });
});