import React, { useEffect, useState } from 'react';

import { Alert, StyleSheet, View } from 'react-native';

import RateInfo from './commons/RateInfo';
import CurrencyAmountSelector from '../../components/CurrencyAmountSelector';
import { Currency, Route } from '../../types';

import useSendMoney from './hooks/useSendMoney';
import TimeInfo from './commons/TimeInfo';
import Button from '../../components/Button/Button';

const SendMoneyScreen = () => {
  const { getSelectedRoute, convertAmountWithRate } = useSendMoney();
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState<Currency>(
    Currency.AED,
  );
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState<Currency>(
    Currency.PKR,
  );
  const [amountFrom, setAmountFrom] = useState<number>();
  const [amountTo, setAmountTo] = useState<number>();
  const [selectedRoute, setSelectedRoute] = useState<Route | undefined>();

  useEffect(() => {
    setAmountFrom(0);
    setAmountTo(0);
    const route = getSelectedRoute(selectedCurrencyFrom, selectedCurrencyTo);
    setSelectedRoute(route);
  }, [selectedCurrencyTo]);

  const onAmountFromChange = (value: number) => {
    if (!selectedRoute || isNaN(value)) return;

    setAmountFrom(value);
    setAmountTo(convertAmountWithRate(selectedRoute, value));
  };

  const onAmountToChange = (value: number) => {
    if (!selectedRoute || isNaN(value)) return;
    setAmountTo(value);
    setAmountFrom(convertAmountWithRate(selectedRoute, value, true));
  };

  return (
    <View style={styles.container}>
      <CurrencyAmountSelector
        label={'You send exactly'}
        placeholder='amount'
        isCurrencySelectorDisabled={true}
        selectedCurrency={selectedCurrencyFrom}
        currencies={[Currency.AED]}
        onSelectCurrency={setSelectedCurrencyFrom}
        onChangeAmount={onAmountFromChange}
        amount={amountFrom}
      />
      <RateInfo route={selectedRoute!} amount={amountFrom!} />
      <CurrencyAmountSelector
        label={'Recipient gets'}
        placeholder='amount'
        currencies={[Currency.NPR, Currency.PHP, Currency.PKR]}
        selectedCurrency={selectedCurrencyTo}
        onSelectCurrency={setSelectedCurrencyTo}
        onChangeAmount={onAmountToChange}
        amount={amountTo}
      />
      <TimeInfo route={selectedRoute!} />
      <Button
        disabled={!amountTo}
        label='Start transfer'
        onPress={() => {
          Alert.alert(
            `Transfer started. Receiver will get ${amountTo} ${selectedCurrencyTo}`,
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});

export default SendMoneyScreen;