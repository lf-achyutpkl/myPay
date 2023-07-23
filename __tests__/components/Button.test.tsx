import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../../src/components/Button/Button';


test('should renders correctly with label and onPress handler', () => {
  const mockOnPress = jest.fn();
  const label = 'start transfer';

  const { getByText } = render(<Button onPress={mockOnPress} label={label} />);

  const buttonElement = getByText(label);
  expect(buttonElement).toBeTruthy();

  fireEvent.press(buttonElement);
  expect(mockOnPress).toHaveBeenCalledTimes(1);
});

test('should be disabled when disabled prop is true', () => {
  const mockOnPress = jest.fn();
  const label = 'start transfer';

  const { getByText } = render(
    <Button onPress={mockOnPress} label={label} disabled={true} />
  );

  const buttonElement = getByText(label);
  expect(buttonElement).toBeTruthy();

  fireEvent.press(buttonElement);
  expect(mockOnPress).not.toHaveBeenCalled();
});
