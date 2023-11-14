import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import CharactersRoute from './Characters'

const RootRoute = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <CharactersRoute />
    </NavigationContainer>
  )
}

export default RootRoute
