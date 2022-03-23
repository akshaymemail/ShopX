/* eslint-disable semi */
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, Fragment } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Splash from '../screens/splash'
import Home from '../screens/home'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WhishList from '../screens/wishlist'
import Orders from '../screens/orders'
import Login from '../screens/login'
import Colors from '../themes/colors'

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
        tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          initialParams={{
            icon: 'home',
          }}
        />
        <Tab.Screen
          name="WhishList"
          component={WhishList}
          initialParams={{
            icon: 'heart',
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          initialParams={{
            icon: 'shopping-bag',
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          initialParams={{
            icon: 'user',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <Fragment>
      {/* <Divider width={1} /> */}
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const params = route.params || {}
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = state.index === index
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true })
            }
          }
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
            >
              <FontAwesome
                style={isFocused ? styles.active : styles.inActive}
                name={params.icon}
                size={30}
              />
              <Text style={isFocused ? styles.active : styles.inActive}>
                {label}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY.PURE_WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
  },
  inActive: {
    color: 'gray',
  },
  active: {
    color: Colors.PRIMARY.BLUE_OCEAN,
  },
})
