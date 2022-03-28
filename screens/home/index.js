/* eslint-disable semi */
import { StyleSheet, View } from 'react-native'
import React, { Fragment } from 'react'
import Colors from '../../themes/colors'
import Header from '../../components/Header'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BannerSlide from '../../components/BannerSlide'
import banners from '../../fakedb/banners'
import SearchBar from '../../components/SearchBar'
import Categories from '../../components/Categories'
import categories from '../../fakedb/categories'

export default function Home({ navigation }) {
  const onSeeAll = () => {
    alert('See All')
  }
  return (
    <View style={styles.screen}>
      <Header
        title="ShopX Mall"
        rightContent={() => {
          return (
            <Fragment>
              <Ionicons name="cart" size={20} style={styles.icon} />
              <Ionicons name="notifications" size={20} style={styles.icon} />
            </Fragment>
          )
        }}
      />
      <SearchBar placeholder="Search Product Name" />
      <BannerSlide banners={banners} />
      <Categories categories={categories} onSeeAll={onSeeAll} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.PRIMARY.PURE_WHITE,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.LABEL.OFF_BLUE,
  },
  icon: {
    marginHorizontal: 10,
  },
})
