import React from 'react'
import { StyleSheet, Text, Pressable, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Colors } from '../utils/colors'
import { Screen } from '../utils/screens'

type CharacterkParamList = {
  CharacterDetails: { id: number | undefined }
}

const Characters = () => {
  const navigation = useNavigation<StackNavigationProp<CharacterkParamList>>()

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate(Screen.CharacterDetails, { id: undefined })
        }}
      >
        <Text style={styles.text}>Characters screen</Text>
      </Pressable>
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

export default Characters
