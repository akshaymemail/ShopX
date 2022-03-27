/* eslint-disable semi */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../themes/colors'

export default function Splash() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Splash...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY.PURE_WHITE,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.LABEL.OFF_BLUE,
  },
})
