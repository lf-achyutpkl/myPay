import React, { FunctionComponent } from 'react';
import TextInput from '../TextInput';
import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../commons/theme';

type AmountComponentProps = {
  amount?: number;
  editable?: boolean;
  placeholder?: string;
  onChangeAmount: (value: number) => void;
};

const AmountComponent: FunctionComponent<AmountComponentProps> = (props) => {
  const { amount,  onChangeAmount, placeholder, editable } = props;

  return (
    <TextInput
      editable={editable}
      value={amount?.toString()}
      placeholder={placeholder}
      style={styles.textInput}
      keyboardType={Platform.OS === 'android' ? 'phone-pad' : 'decimal-pad'}
      onChangeText={(value: string) => onChangeAmount(Number(value))}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 20,
    borderWidth: 1,
    borderLeftColor: 'transparent',
    marginLeft: -5,
    borderColor: colors.borderColor,
    fontSize: 25,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default AmountComponent;
