import React, { FC, FunctionComponent } from 'react';

import { Alert, StyleSheet, View } from 'react-native';

import RateInfo from './commons/RateInfo';
import CurrencyAmountSelector from '../../components/CurrencyAmountSelector';
import { Currency } from '../../types';

import useSendMoney from '../../hooks/useSendMoney';
import TimeInfo from './commons/TimeInfo';
import Button from '../../components/Button/Button';

type SendMoneyScreenProps = {
  testID: string;
};

const SendMoneyScreen: FunctionComponent<SendMoneyScreenProps> = ({ testID }) => {
  const {
    selectedRoute,
    setAmountFrom,
    setAmountTo,
    selectedCurrencyFrom,
    selectedCurrencyTo,
    setSelectedCurrencyFrom,
    setSelectedCurrencyTo,
    amountFrom,
    amountTo,
    convertAmountWithRate,
  } = useSendMoney();

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
    <View style={styles.container} testID={`${testID}-container`}>
      <CurrencyAmountSelector
        testID={`${testID}#currencyAmountSelector_AmountFrom`}
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
        testID={`${testID}#currencyAmountSelector_AmountTo`}
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
        testID={`${testID}#currencyAmountSelector_AmountFrom`}
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
