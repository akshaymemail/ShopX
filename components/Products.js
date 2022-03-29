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

export default function Products({ items, onSelect }) {
  return (
    <View style={styles.container}>
      {items.map((item, i) => {
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
})
