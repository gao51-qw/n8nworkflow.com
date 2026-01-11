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
  });

  describe('formatCompactNumber', () => {
    test('should format large numbers compactly', () => {
      expect(formatCompactNumber(1500)).toBe('1.5K');
      expect(formatCompactNumber(1500000)).toBe('1.5M');
    });

    test('should keep small numbers as is', () => {
      expect(formatCompactNumber(123)).toBe('123');
    });
  });

  describe('formatPrice', () => {
    test('should format price with currency', () => {
      expect(formatPrice(19.99)).toBe('$19.99');
      expect(formatPrice(29.99, '€')).toBe('€29.99');
    });

    test('should handle free price', () => {
      expect(formatPrice(0)).toBe('Free');
    });
  });
});