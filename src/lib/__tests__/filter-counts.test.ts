/**
 * filter-counts API 测试
 * 测试筛选计数 API 的错误处理和数据验证
 */

import { getFilterCountsV2 } from '../services/workflows';

describe('Filter Counts API', () => {
  describe('getFilterCountsV2', () => {
    test('应该返回所有筛选类型的计数', async () => {
      const result = await getFilterCountsV2();
      
      // 检查返回对象有所需的属性
      expect(result).toHaveProperty('timePeriods');
      expect(result).toHaveProperty('categories');
      expect(result).toHaveProperty('complexities');
      expect(result).toHaveProperty('price');
    });

    test('timePeriods 应该包含所需的时间段', async () => {
      const result = await getFilterCountsV2();
      const timePeriods = result.timePeriods;
      
      expect(timePeriods).toHaveProperty('all');
      expect(timePeriods).toHaveProperty('7days');
      expect(timePeriods).toHaveProperty('month');
      expect(timePeriods).toHaveProperty('6months');
    });

    test('complexities 应该包含所有复杂度级别', async () => {
      const result = await getFilterCountsV2();
      const complexities = result.complexities;
      
      expect(complexities).toHaveProperty('all');
      expect(complexities).toHaveProperty('beginner');
      expect(complexities).toHaveProperty('intermediate');
      expect(complexities).toHaveProperty('advanced');
    });

    test('所有计数值应该是非负整数', async () => {
      const result = await getFilterCountsV2();
      
      Object.values(result.timePeriods).forEach(count => {
        expect(typeof count).toBe('number');
        expect(count).toBeGreaterThanOrEqual(0);
      });
      
      Object.values(result.complexities).forEach(count => {
        expect(typeof count).toBe('number');
        expect(count).toBeGreaterThanOrEqual(0);
      });
      
      Object.values(result.price).forEach(count => {
        expect(typeof count).toBe('number');
        expect(count).toBeGreaterThanOrEqual(0);
      });
    });

    test('带筛选条件时应该处理过滤', async () => {
      const result = await getFilterCountsV2({
        complexity: 'beginner',
        price: 'free',
      });
      
      // 应该返回有效的计数对象
      expect(result).toHaveProperty('timePeriods');
      expect(result).toHaveProperty('categories');
      expect(result).toHaveProperty('complexities');
      expect(result).toHaveProperty('price');
    });

    test('应该优雅处理无效筛选条件', async () => {
      const result = await getFilterCountsV2({
        complexity: 'invalid' as any,
      });
      
      // 应该返回默认值而不是抛出错误
      expect(result).toHaveProperty('timePeriods');
      expect(result.timePeriods).toBeDefined();
    });

    test('categories 字典应该有数字值', async () => {
      const result = await getFilterCountsV2();
      
      Object.entries(result.categories).forEach(([key, count]) => {
        expect(typeof key).toBe('string');
        expect(typeof count).toBe('number');
        expect(count).toBeGreaterThanOrEqual(0);
      });
    });
  });
});

// Mock 工作流用于测试
export const mockWorkflowCounts = {
  timePeriods: { all: 100, '7days': 5, month: 20, '6months': 50, year: 80, '2years': 95, '3years': 100 },
  categories: { ai: 30, automation: 25, 'data-processing': 20 },
  complexities: { all: 100, beginner: 30, intermediate: 50, advanced: 20 },
  price: { all: 100, free: 70, paid: 30 },
};
