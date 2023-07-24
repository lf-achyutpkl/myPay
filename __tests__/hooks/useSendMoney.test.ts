import { renderHook, cleanup } from '@testing-library/react-native';
import { Currency, Route } from '../../src/types';
import useSendMoney from '../../src/hooks/useSendMoney';

describe('useSendMoney', () => {
  describe('convertAmountWithRate', () => {
    afterEach(cleanup);

    test('should convert amount with rate with base rate', () => {
      const route: Route = {
        currencyPair: 'AED/PHP',
        currencyFrom: Currency.AED,
        currencyTo: Currency.PHP,
        rate: 13.5,
        maxAmount: 10000,
        fee: {
          amount: 0,
          percentage: 0,
        },
        processingTime: '1-2 days',
      };
      const amount = 100;
      const expected = 1350;

      const { result } = renderHook(() => useSendMoney());

      const actual = result.current.convertAmountWithRate(route, amount);

      expect(actual).toBe(expected);
    });
  })
})
