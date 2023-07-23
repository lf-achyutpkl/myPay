import { useCallback, useEffect, useState } from 'react';
import allRoutes from '../mock/routes.json';
import { Currency, Route } from '../types';
import { roundOff } from '../utils/amount';

export type UseSendMoney = {
  selectedCurrencyFrom: Currency;
  selectedCurrencyTo: Currency;
  setSelectedCurrencyTo: (currency: Currency) => void;
  setSelectedCurrencyFrom: (currency: Currency) => void;
  amountFrom: number | undefined;
  amountTo: number | undefined;
  setAmountFrom: (amount: number) => void;
  setAmountTo: (amount: number) => void;
  selectedRoute: Route | undefined;
  setSelectedRoute: (route: Route) => void;
  routes: Route[];
  getSelectedRoute: (
    currencyFrom: Currency,
    currencyTo: Currency,
  ) => Route | undefined;
  convertAmountWithRate: (
    route: Route,
    amount: number,
    isReverse?: boolean,
  ) => number;
};

const useSendMoney = (): UseSendMoney => {
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState<Currency>(
    Currency.AED,
  );
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState<Currency>(
    Currency.PKR,
  );
  const [amountFrom, setAmountFrom] = useState<number>();
  const [amountTo, setAmountTo] = useState<number>();
  const [selectedRoute, setSelectedRoute] = useState<Route | undefined>();

  const routes = allRoutes as Route[];

  useEffect(() => {
    setAmountFrom(0);
    setAmountTo(0);
    const route = getSelectedRoute(selectedCurrencyFrom, selectedCurrencyTo);
    setSelectedRoute(route);
  }, [selectedCurrencyTo]);

  const convertAmountWithRate = useCallback(
    (route: Route, amount: number, isReverse: boolean = false) => {
      if (!amount) return 0;

      const { rate } = route;

      const calculatedRate = isReverse ? 1 / rate : rate;
      return roundOff(amount * calculatedRate);
    },
    [],
  );

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
    selectedCurrencyFrom,
    selectedCurrencyTo,
    setSelectedCurrencyTo,
    setSelectedCurrencyFrom,
    amountFrom,
    amountTo,
    setAmountFrom,
    setAmountTo,
    selectedRoute,
    setSelectedRoute,
    routes,
    getSelectedRoute,
    convertAmountWithRate,
  };
};

export default useSendMoney;
