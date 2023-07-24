import React, { FunctionComponent } from 'react';
import CurrencySelector from '../CurrencySelector';
import AmountComponent from '../AmountComponent';
import { StyleSheet, View } from 'react-native';
import { Currency } from '../../types';

type CurrencyAmountSelectorProps = {
  label: string;
  currencies: Currency[];
  onChangeAmount: (value: number) => void;
  onSelectCurrency: (value: Currency) => void;
  isCurrencySelectorDisabled?: boolean;
  placeholder?: string;
  selectedCurrency?: Currency;
  amount?: number;
  isAmountEditable?: boolean;
  testID?: string;
};

const CurrencyAmountSelector: FunctionComponent<CurrencyAmountSelectorProps> = (
  props,
) => {
  const {
    label,
    amount,
    currencies,
    selectedCurrency,
    isCurrencySelectorDisabled,
    onChangeAmount,
    placeholder,
    onSelectCurrency,
    isAmountEditable = true,
    testID,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.currencyContainer}>
        <CurrencySelector
          testID={`${testID}#currencySelector`}
          label={label}
          currencies={currencies}
          selectedCurrency={selectedCurrency}
          disabled={isCurrencySelectorDisabled}
          onSelectCurrency={onSelectCurrency}
        />
      </View>
      <View style={styles.amountContainer}>
        <AmountComponent
          testID={`${testID}#amountComponent`}
          editable={isAmountEditable}
          amount={amount}
          placeholder={placeholder}
          onChangeAmount={onChangeAmount}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currencyContainer: {
    flex: 0.6,
  },
  amountContainer: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CurrencyAmountSelector;
