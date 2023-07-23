import { useCallback } from 'react';
import routes from '../../../mock/routes.json';
import { Currency, Route } from '../../../types';
import { roundOff } from '../../../utils/amount';

const useSendMoney = () => {
  const convertAmountWithRate = (
    route: Route,
    amount: number,
    isReverse: boolean = false,
  ) => {
    if (!amount) return 0;

    const { rate } = route;

    const calculatedRate = isReverse ? 1 / rate : rate;
    return roundOff(amount * calculatedRate);
  };

  const getSelectedRoute = useCallback(
    (currencyFrom: Currency, currencyTo: Currency): Route | undefined => {
      const selectedRoute = routes?.find(
        (route) => route.currencyPair === `${currencyFrom}/${currencyTo}`,
      );
      return selectedRoute as Route;
    },
    [],
  );

  return {
    routes,
    getSelectedRoute,
    convertAmountWithRate,
  };
};

export default useSendMoney;
