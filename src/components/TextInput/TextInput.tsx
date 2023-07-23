import React from 'react';
import {
  TextInput as NativeInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

const TextInput = (props: TextInputProps) => {
  return (
    <NativeInput
      style={styles.input}
      {...props}
      textAlign='right'
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export default TextInput;
