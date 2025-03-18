import { renderHook } from '@testing-library/react';
import useDateHelper from './useDateHelper';

describe('useDateHelper', () => {

  test('should return hyphenatedDate function', () => {
    const { result } = renderHook(() => useDateHelper());
    const { hyphenatedDate } = result.current;

    expect(typeof hyphenatedDate).toBe('function');
  });

  describe('hyphenatedDate', () => {

    test('should return a string given a date', () => {
      const { result } = renderHook(() => useDateHelper());
      const { hyphenatedDate } = result.current;

      const res = hyphenatedDate(new Date());

      expect(typeof res).toBe('string');
    });

    test('should return 2024-1-1 given Date(2024, 0, 1) with default options', () => {
      const { result } = renderHook(() => useDateHelper());
      const { hyphenatedDate } = result.current;

      const res = hyphenatedDate(new Date(2024, 0, 1));

      expect(res).toBe('2024-1-1');
    });

    test('should return 24-01-01 given Date(2024, 0, 1) with 2-digit options', () => {
      const { result } = renderHook(() => useDateHelper());
      const { hyphenatedDate } = result.current;

      const res = hyphenatedDate(new Date(2024, 0, 1), [{
        year: '2-digit',
      }, {
        month: '2-digit',
      }, {
        month: '2-digit',
      }])

      expect(res).toBe('24-01-01');
    });

  });

});