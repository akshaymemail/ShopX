/* eslint-disable semi */
import React, { useState, useEffect } from 'react'
import Splash from '../screens/splash'
import Home from '../screens/home'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WhishList from '../screens/wishlist'
import Orders from '../screens/orders'
import Login from '../screens/login'

export default function Navigator() {
  const Tab = createBottomTabNavigator()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])
  if (loading) {
    return <Splash />
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="WhishList" component={WhishList} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
