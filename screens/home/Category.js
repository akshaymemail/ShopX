/* eslint-disable semi */
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { Fragment } from 'react'
import Header from '../../components/Header'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SearchBar from '../../components/SearchBar'
import Colors from '../../themes/colors'
import Products from '../../components/Products'
import products from '../../fakedb/products'

export default function Category({ navigation, route: { params } }) {
  const { title } = params
  const onBackPressed = () => {
    navigation.goBack()
  }
  const onSelect = () => {
    alert('Selected')
  }
  return (
    <View style={styles.screen}>
      <Header
        title="Category"
        isBackButton={true}
        onBack={onBackPressed}
        rightContent={() => {
          return (
            <Fragment>
              <Ionicons name="cart" size={20} style={styles.icon} />
            </Fragment>
          )
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <SearchBar placeholder="Search Product Name" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Products items={products[0].items} onSelect={onSelect} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  icon: {
    marginHorizontal: 10,
  },
  titleContainer: {
    marginHorizontal: 10,
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.PRIMARY.NAVY_BLACK,
  },
})
