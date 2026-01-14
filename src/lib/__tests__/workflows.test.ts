// 工作流服务单元测试
import { describe, expect, test, beforeEach, jest } from '@jest/globals';
import {
  getWorkflows,
  getWorkflowBySlug,
  getFilterCountsV2,
  getWorkflowsByCategory,
  getWorkflowsByAuthor,
  getWorkflowsByComplexity,
  searchWorkflows
} from '../services/workflows';
import { mockWorkflowCounts } from './filter-counts.test';

describe('Workflow Service', () => {
  describe('getWorkflows', () => {
    test('应该返回工作流列表和总数', async () => {
      const result = await getWorkflows();
      expect(result).toHaveProperty('workflows');
      expect(result).toHaveProperty('total');
      expect(Array.isArray(result.workflows)).toBe(true);
      expect(typeof result.total).toBe('number');
    });

    test('应该应用分页参数', async () => {
      const result = await getWorkflows({ offset: 0, limit: 5 });
      expect(result.workflows.length).toBeLessThanOrEqual(5);
    });

    test('应该按分类筛选', async () => {
      const result = await getWorkflows({ category: 'ai' });
      result.workflows.forEach(workflow => {
        expect(workflow.categories).toContainEqual(expect.stringContaining('ai'));
      });
    });

    test('应该按复杂度筛选', async () => {
      const result = await getWorkflows({ complexity: 'beginner' });
      result.workflows.forEach(workflow => {
        expect(workflow.complexityLevel).toBe('beginner');
      });
    });

    test('应该按价格筛选', async () => {
      const freeResult = await getWorkflows({ price: 'free' });
      freeResult.workflows.forEach(workflow => {
        expect(workflow.price).toBe(0);
      });

      const paidResult = await getWorkflows({ price: 'paid' });
      paidResult.workflows.forEach(workflow => {
        expect(workflow.price).toBeGreaterThan(0);
      });
    });
  });

  describe('getWorkflowBySlug', () => {
    test('应该返回具有指定 slug 的工作流', async () => {
      const workflows = await getWorkflows({ limit: 1 });
      if (workflows.workflows.length > 0) {
        const slug = workflows.workflows[0].slug;
        const result = await getWorkflowBySlug(slug);
        expect(result).not.toBeNull();
        expect(result?.slug).toBe(slug);
      }
    });

    test('应该返回 null 对于不存在的 slug', async () => {
      const result = await getWorkflowBySlug('non-existent-slug');
      expect(result).toBeNull();
    });
  });

  describe('getFilterCountsV2', () => {
    test('应该返回所有筛选类型的计数', async () => {
      const result = await getFilterCountsV2();
      expect(result).toHaveProperty('timePeriods');
      expect(result).toHaveProperty('categories');
      expect(result).toHaveProperty('complexities');
      expect(result).toHaveProperty('price');
    });

    test('应该处理带筛选条件的请求', async () => {
      const result = await getFilterCountsV2({
        complexity: 'beginner',
        price: 'free',
      });
      expect(result).toHaveProperty('timePeriods');
      expect(result).toHaveProperty('categories');
      expect(result).toHaveProperty('complexities');
      expect(result).toHaveProperty('price');
    });

    test('应该优雅处理无效筛选条件', async () => {
      const result = await getFilterCountsV2({
        complexity: 'invalid' as any,
      });
      expect(result).toHaveProperty('timePeriods');
      expect(result.timePeriods).toBeDefined();
    });
  });

  describe('getWorkflowsByCategory', () => {
    test('应该返回指定分类的工作流', async () => {
      const result = await getWorkflowsByCategory('ai');
      expect(result.workflows.length).toBeGreaterThanOrEqual(0);
      result.workflows.forEach(workflow => {
        expect(workflow.categories).toContainEqual(expect.stringContaining('ai'));
      });
    });
  });

  describe('getWorkflowsByAuthor', () => {
    test('应该返回指定作者的工作流', async () => {
      const result = await getWorkflowsByAuthor('author-1');
      expect(result.workflows.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe('getWorkflowsByComplexity', () => {
    test('应该返回指定复杂度的工作流', async () => {
      const result = await getWorkflowsByComplexity('beginner');
      expect(result.workflows.length).toBeGreaterThanOrEqual(0);
      result.workflows.forEach(workflow => {
        expect(workflow.complexityLevel).toBe('beginner');
      });
    });
  });

  describe('searchWorkflows', () => {
    test('应该返回匹配搜索查询的工作流', async () => {
      const result = await searchWorkflows('automation');
      expect(result.workflows.length).toBeGreaterThanOrEqual(0);
      result.workflows.forEach(workflow => {
        expect(workflow.title.toLowerCase() + workflow.description.toLowerCase())
          .toContain('automation');
      });
    });

    test('应该应用额外的筛选条件', async () => {
      const result = await searchWorkflows('automation', {
        complexity: 'beginner',
        price: 'free',
      });
      result.workflows.forEach(workflow => {
        expect(workflow.complexityLevel).toBe('beginner');
        expect(workflow.price).toBe(0);
      });
    });
  });
});