import { roundOff } from '../../src/utils/amount';

describe('amount', () => {
  describe('roundOff', () => {
    test('should round off the number to 2 decimal places', () => {
      const num = 1.23456789;
      const expected = 1.23;

      const actual = roundOff(num);

      expect(actual).toBe(expected);
    });
  });
});
