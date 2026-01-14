// Unit test for utility functions
import { describe, expect, test } from '@jest/globals';
import { formatNumber, formatCompactNumber, formatPrice } from '../../src/lib/utils/format';

describe('Utility Functions', () => {
  describe('formatNumber', () => {
    test('should format number with commas', () => {
      const result = formatNumber(1000000);
      expect(result).toBe('1,000,000');
    });

    test('should handle decimal numbers', () => {
      const result = formatNumber(1234.567);
      expect(result).toBe('1,234.567');
    });

    test('should handle zero', () => {
      const result = formatNumber(0);
      expect(result).toBe('0');
    });

    test('should handle negative numbers', () => {
      const result = formatNumber(-1000);
      expect(result).toBe('-1,000');
    });
  });

  describe('formatCompactNumber', () => {
    test('should format large numbers compactly', () => {
      expect(formatCompactNumber(1500)).toBe('1.5K');
      expect(formatCompactNumber(1500000)).toBe('1.5M');
      expect(formatCompactNumber(1500000000)).toBe('1.5B');
    });

    test('should keep small numbers as is', () => {
      expect(formatCompactNumber(123)).toBe('123');
      expect(formatCompactNumber(999)).toBe('999');
    });

    test('should handle zero', () => {
      expect(formatCompactNumber(0)).toBe('0');
    });

    test('should handle negative numbers', () => {
      expect(formatCompactNumber(-1500)).toBe('-1.5K');
    });
  });

  describe('formatPrice', () => {
    test('should format price with currency', () => {
      expect(formatPrice(19.99)).toBe('$19.99');
      expect(formatPrice(29.99, '€')).toBe('€29.99');
      expect(formatPrice(99.99, '¥')).toBe('¥99.99');
    });

    test('should handle free price', () => {
      expect(formatPrice(0)).toBe('Free');
      expect(formatPrice(0, '€')).toBe('Free');
    });

    test('should handle negative prices', () => {
      expect(formatPrice(-10)).toBe('-$10.00');
    });

    test('should handle large prices', () => {
      expect(formatPrice(9999.99)).toBe('$9,999.99');
    });
  });
});