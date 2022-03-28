/* eslint-disable semi */
import { StyleSheet, View, Platform, StatusBar } from 'react-native'
import React from 'react'
import Colors from '../themes/colors'

export default function MyStatusBar() {
  return (
    <View style={styles.statusbar}>
      <StatusBar
        backgroundColor={Colors.PRIMARY.PURE_WHITE}
        barStyle="dark-content"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  statusbar: {
    height: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: Colors.PRIMARY.PURE_WHITE,
  },
})
