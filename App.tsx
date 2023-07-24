import React from 'react';
import { SafeAreaView } from 'react-native';
import SendMoneyScreen from './src/screens/SendMoneyScreen/SendMoneyScreen';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SendMoneyScreen testID='sendMoneyScreen'/>
    </SafeAreaView>
  );
}
