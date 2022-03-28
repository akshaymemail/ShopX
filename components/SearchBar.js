/* eslint-disable semi */
import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../themes/colors'

export default function SearchBar({ placeholder }) {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Colors.SECONDARY.HALF_GREY}
          style={styles.textInput}
        />
        <AntDesign name="search1" size={25} color={Colors.PRIMARY.NAVY_BLACK} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 25,
  },

  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: Colors.SECONDARY.OFF_GREY,
    borderRadius: 10,
    paddingHorizontal: 20,
    height: 50,
  },
  textInput: {
    fontWeight: 'bold',
  },
})
