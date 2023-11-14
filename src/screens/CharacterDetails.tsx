import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

import { Colors } from '../utils/colors'

type ParamList = {
  CharacterParams: { id: number }
}

const CharacterDetails = () => {
  const route = useRoute<RouteProp<ParamList, 'CharacterParams'>>()
  const { params } = route

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Character Details screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: Colors.text
  }
})

export default CharacterDetails
