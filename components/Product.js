/* eslint-disable semi */
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../themes/colors'

export default function Product(props) {
  const { name, image, price, rating, reviews, onSelect } = props
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onSelect.bind(this, props)}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={18} color={Colors.PRIMARY.ORANGE_FRESH} />
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <Text style={styles.reviews}>{reviews} Reviews</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Ionicons name="ios-ellipsis-vertical-sharp" size={20} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 8,
    margin: 5,
    backgroundColor: Colors.PRIMARY.PURE_WHITE,
    shadowColor: Colors.PRIMARY.PURE_BLACK,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    elevation: 1,

    width: 170,
    height: 242,
    borderRadius: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 5,
  },
  nameContainer: {
    marginVertical: 5,
  },
  name: {
    fontWeight: 'normal',
    fontSize: 14,
    color: Colors.PRIMARY.NAVY_BLACK,
  },
  priceContainer: {
    marginVertical: 5,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.SECONDARY.RED_VELVET,
  },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  feedback: {
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  actionContainer: {},
})
