/* eslint-disable semi */
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../themes/colors'

export default function Header({ isBackButton, onBack, title, rightContent }) {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.leftContainer, ...styles.box }}>
        {isBackButton && (
          <TouchableOpacity onPress={onBack}>
            <AntDesign name="back" size={20} />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ ...styles.titleContainer, ...styles.box }}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={{ ...styles.rightContainer, ...styles.box }}>
        {rightContent && rightContent()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.PRIMARY.PURE_WHITE,
    shadowColor: Colors.PRIMARY.PURE_BLACK,
    shadowOpacity: 0.5,
    elevation: 2,
  },
  box: {
    width: '33.3%',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  titleText: {
    color: Colors.PRIMARY.BLUE_OCEAN,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
