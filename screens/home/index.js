/* eslint-disable semi */
import { StyleSheet, View, ScrollView } from 'react-native'
import React, { Fragment } from 'react'
import Colors from '../../themes/colors'
import Header from '../../components/Header'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BannerSlide from '../../components/BannerSlide'
import banners from '../../fakedb/banners'
import SearchBar from '../../components/SearchBar'
import Categories from '../../components/Categories'
import categories from '../../fakedb/categories'
import ProductCategories from '../../components/ProductCategories'
import products from '../../fakedb/products'

export default function Home({ navigation }) {
  // fires up when see all pressed
  const onSeeAll = () => {
    alert('See All')
  }

  // fires up on product is selected
  const onSelect = () => {
    alert('Product selected')
  }
  return (
    <ScrollView style={styles.screen}>
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
      {products.map(({ title, items }, i) => {
        return (
          <ProductCategories
            key={i}
            title={title}
            categories={items}
            onSeeAll={onSeeAll}
            onSelect={onSelect}
          />
        )
      })}
    </ScrollView>
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
