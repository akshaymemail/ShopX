/* eslint-disable semi */
import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Details from '../screens/home/Details'
import Category from '../screens/home/Category'

export default function HomeStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
