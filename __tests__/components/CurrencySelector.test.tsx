import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CurrencySelector from '../../src/components/CurrencySelector/CurrencySelector';
import { Currency } from '../../src/types';

test('should renders correctly with label and placeholder', () => {
  const mockOnSelectCurrency = jest.fn();
  const label = 'Select Currency';
  const currencies = [Currency.AED, Currency.NPR, Currency.PHP];
  const selectedCurrency = Currency.AED;

  const { getByTestId, getByText } = render(
    <CurrencySelector
      label={label}
      onSelectCurrency={mockOnSelectCurrency}
      currencies={currencies}
      selectedCurrency={selectedCurrency}
    />
  );

  const labelElement = getByText(label);
  expect(labelElement).toBeTruthy();

  const selectorElement = getByTestId('currency-selector');
  expect(selectorElement).toBeTruthy();
});

test('should calls setValue when a currency is selected', () => {
  const mockOnSelectCurrency = jest.fn();
  const label = 'Select Currency';
  const currencies = [Currency.AED, Currency.NPR, Currency.PHP];
  const selectedCurrency = Currency.AED;

  const { getByTestId } = render(
    <CurrencySelector
      label={label}
      onSelectCurrency={mockOnSelectCurrency}
      currencies={currencies}
      selectedCurrency={selectedCurrency}
    />
  );

  const selectorElement = getByTestId('currency-selector');
  fireEvent.press(selectorElement);

  const currencyToSelect = currencies[1];
  fireEvent(selectorElement, 'setValue' , currencyToSelect);

  expect(mockOnSelectCurrency).toHaveBeenCalledWith(currencyToSelect);
  expect(mockOnSelectCurrency).toHaveBeenCalledTimes(2);
});

test('should not call onSelectCurrency when disabled', () => {
  const mockOnSelectCurrency = jest.fn();
  const label = 'Select Currency';
  const currencies = [Currency.AED, Currency.NPR, Currency.PHP];
  const selectedCurrency = Currency.AED;

  const { getByTestId } = render(
    <CurrencySelector
      label={label}
      onSelectCurrency={mockOnSelectCurrency}
      currencies={currencies}
      selectedCurrency={selectedCurrency}
      disabled={true}
    />
  );

  const selectorElement = getByTestId('currency-selector');
  fireEvent(selectorElement, 'setOpen', true);
  fireEvent(selectorElement, 'setValue' , Currency.PHP);

  expect(mockOnSelectCurrency).toHaveBeenCalledTimes(1);
});
