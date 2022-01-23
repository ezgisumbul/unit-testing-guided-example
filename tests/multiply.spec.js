const { multiply } = require('./../calculator');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(5, 2);
    expect(result).toBe(10);
  });

  test('should multiply a positive and a negative integer correctly', () => {
    const result = multiply(-2, 3);
    expect(result).toBe(-6);
  });

  test('should return 0 when one of the arguments is 0', () => {
    const result = multiply(0, 6);
    expect(result).toBe(0);
  });
});
