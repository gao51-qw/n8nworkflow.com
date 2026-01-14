// API 集成测试
import { test, expect } from '@playwright/test';

test.describe('API Endpoints', () => {
  test('应该获取筛选计数', async ({ request }) => {
    const response = await request.get('/api/filter-counts.json');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('timePeriods');
    expect(data).toHaveProperty('categories');
    expect(data).toHaveProperty('complexities');
    expect(data).toHaveProperty('price');
  });

  test('应该获取工作流列表', async ({ request }) => {
    const response = await request.get('/api/n8n-workflows.json');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('workflows');
    expect(data).toHaveProperty('total');
    expect(Array.isArray(data.workflows)).toBe(true);
  });

  test('应该获取热门工作流', async ({ request }) => {
    const response = await request.get('/api/workflows-by-time.json?time=month');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('workflows');
    expect(data).toHaveProperty('total');
  });

  test('应该处理搜索请求', async ({ request }) => {
    const response = await request.get('/api/search.json?query=automation');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('workflows');
    expect(data).toHaveProperty('total');
  });

  test('应该获取工作流详情', async ({ request }) => {
    // 首先获取一个工作流以获取其 ID
    const workflowsResponse = await request.get('/api/n8n-workflows.json?limit=1');
    const workflowsData = await workflowsResponse.json();
    
    if (workflowsData.workflows && workflowsData.workflows.length > 0) {
      const workflowId = workflowsData.workflows[0].id;
      const response = await request.get(`/api/workflow-details.json?id=${workflowId}`);
      expect(response.ok()).toBeTruthy();
      const data = await response.json();
      expect(data).toHaveProperty('id');
      expect(data.id).toBe(workflowId);
    }
  });

  test('应该处理无效的工作流 ID', async ({ request }) => {
    const response = await request.get('/api/workflow-details.json?id=999999');
    expect(response.ok()).toBeFalsy();
  });

  test('应该获取健康状态', async ({ request }) => {
    const response = await request.get('/api/health.json');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('status');
    expect(data.status).toBe('healthy');
  });

  test('应该获取统计数据', async ({ request }) => {
    const response = await request.get('/api/stats.json');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('totalWorkflows');
    expect(data).toHaveProperty('totalCategories');
    expect(data).toHaveProperty('totalAuthors');
  });
});