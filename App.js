import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    color: '#000000',
  },
});
