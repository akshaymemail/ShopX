/* eslint-disable semi */
import React, { useState, useEffect } from 'react'
import Splash from '../screens/splash'
import Home from '../screens/home'
import Login from '../screens/auth/Login'

export default function Navigator() {
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])
  if (loading) {
    return <Splash />
  }
  if (!isLoggedIn) {
    return <Login />
  }
  return <Home />
}
