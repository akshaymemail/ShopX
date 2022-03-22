/* eslint-disable semi */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../themes/colors'

export default function Login() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Login</Text>
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
    color: Colors.LABEL.OFF_BLUE,
  },
})
