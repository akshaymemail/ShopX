/* eslint-disable semi */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native'
import React from 'react'
import Colors from '../themes/colors'

export default function Categories({ categories, onSeeAll }) {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.heading__title}>Categories</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onSeeAll.bind(this, 'Categories')}
        >
          <Text style={styles.heading__seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(({ title, image }, i) => {
          return <CategoryItem key={i} title={title} image={image} />
        })}
      </ScrollView>
    </View>
  )
}

const CategoryItem = ({ title, image }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.item}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
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
