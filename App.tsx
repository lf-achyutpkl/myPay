import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SendMoneyScreen from './src/screens/SendMoneyScreen/SendMoneyScreen';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SendMoneyScreen/>
    </SafeAreaView>
  );
}
