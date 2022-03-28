/* eslint-disable semi */
import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import PagerView from 'react-native-pager-view'
import Dots from 'react-native-dots-pagination'

const BannerSlide = ({ banners }) => {
  const [position, setPosition] = useState(0)
  return (
    <View style={styles.container}>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(e) => setPosition(e.nativeEvent.position)}
      >
        {banners.map(({ _id, imageUri, action }, i) => {
          return (
            <View key={i}>
              <Image style={styles.image} source={{ uri: imageUri }} />
            </View>
          )
        })}
      </PagerView>
      <View style={styles.dots}>
        <Dots length={banners.length} active={position} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  pagerView: {
    flex: 1,
  },
  image: {
    height: 150,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  dots: {
    marginTop: -30,
  },
})

export default BannerSlide
