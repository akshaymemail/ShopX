/* eslint-disable semi */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import Colors from '../themes/colors'
import Product from './Product'

export default function ProductCategories({
  title,
  categories,
  onSeeAll,
  onSelect,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.heading__title}>{title}</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onSeeAll.bind(this, title)}
        >
          <Text style={styles.heading__seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, i) => {
          return (
            <Product
              key={i}
              name={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              reviews={item.reviews}
              onSelect={onSelect}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  heading__title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.PRIMARY.NAVY_BLACK,
  },
  heading__seeAll: {
    color: Colors.PRIMARY.BLUE_OCEAN,
    fontSize: 16,
  },
  item: {
    marginVertical: 15,
    marginRight: 15,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
