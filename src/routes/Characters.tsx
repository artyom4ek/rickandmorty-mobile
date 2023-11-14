import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Screen } from '../utils/screens'
import Characters from '../screens/Characters'
import CharacterDetails from '../screens/CharacterDetails'

const Stack = createStackNavigator()

const CharactersRoute = () => {
  return (
    <Stack.Navigator initialRouteName={Screen.Characters}>
      <Stack.Screen name={Screen.Characters} component={Characters} />
      <Stack.Screen name={Screen.CharacterDetails} component={CharacterDetails} />
    </Stack.Navigator>
  )
}

export default CharactersRoute
