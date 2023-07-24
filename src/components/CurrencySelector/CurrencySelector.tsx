import React, { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Currency } from '../../types';
import { colors, shades } from '../../commons/theme';
import ImageSVG from '../ImageSVG';

type CurrencySelectorProps = {
  label: string;
  onSelectCurrency: (currency: Currency) => void;
  currencies: Currency[];
  disabled?: boolean;
  selectedCurrency?: Currency;
  testID?: string;
};

const CurrencySelector: FunctionComponent<CurrencySelectorProps> = (props) => {
  const {
    label,
    onSelectCurrency,
    currencies,
    disabled = false,
    selectedCurrency,
    testID,
  } = props;

  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency | undefined>(
    selectedCurrency,
  );
  const [currencyOptions, setCurrencyOptions] = useState<
    { label: Currency; value: Currency }[]
  >([]);

  useEffect(() => {
    const dropDownOptions = currencies?.map((currency) => ({
      label: currency,
      value: currency,
      icon: () => <ImageSVG image={currency} />,
    }));
    [];
    setCurrencyOptions(dropDownOptions);
  }, [currencies]);

  useEffect(() => {
    onSelectCurrency(currency!);
  }, [currency]);

  return (
    <>
      <View style={styles.container}>
        <Text testID={`${testID}#dropdownLabel`} style={styles.label}>
          {label}
        </Text>
      </View>
      <DropDownPicker
      testID={`${testID}#currencySelector`}
        disabled={disabled}
        style={styles.dropdownContainer}
        labelStyle={styles.dropdownLabel}
        placeholderStyle={styles.dropdownPlaceholder}
        arrowIconContainerStyle={disabled ? styles.hide : styles.show}
        placeholder='select'
        open={open}
        value={currency!}
        items={currencyOptions!}
        setOpen={setOpen}
        setValue={setCurrency}
        setItems={setCurrencyOptions}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: colors.primary,
  },
  label: {
    color: shades[0],
    alignSelf: 'flex-start',
    width: '100%',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  dropdownContainer: {
    borderWidth: 0,
    backgroundColor: colors.primary,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  dropdownPlaceholder: {
    color: shades[0],
    fontSize: 12,
  },
  dropdownLabel: {
    color: shades[0],
    fontWeight: 'bold',
    fontSize: 20,
  },
  hide: {
    display: 'none',
  },
  show: {
    display: 'flex',
  },
});

export default CurrencySelector;
