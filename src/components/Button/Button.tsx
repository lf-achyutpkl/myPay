import { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../commons/theme';

type ButtonProps = {
  onPress: () => void;
  label: string;
  disabled?: boolean;
  testID?: string;
};

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { onPress, label, disabled = false, testID } = props;

  return (
    <TouchableOpacity
      testID={`${testID}#button`}
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, disabled && styles.disabled]}>
      <Text style={styles.label} testID={`${testID}#button-label`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    zIndex: -1,
    width: '90%',
    borderRadius: 15,
    backgroundColor: colors.secondary,
    padding: 20,
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: '#edf2f5',
  },
});

export default Button;
