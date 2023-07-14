import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Home } from './src/pages/Home'
import { SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={'light'}  translucent/>
      <Home />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   },
});