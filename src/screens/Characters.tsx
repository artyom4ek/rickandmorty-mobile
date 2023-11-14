import React from 'react'
import { StyleSheet, Pressable, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Screen } from '../utils/screens'

import CharacterItem from '../components/CharacterItem'
import { Character } from '../models'
import { data } from '../data'

type CharacterkParamList = {
  CharacterDetails: { character: Character }
}

const Characters = () => {
  const navigation = useNavigation<StackNavigationProp<CharacterkParamList>>()

  const navigateToCharacterDetails = (character: Character) => {
    navigation.navigate(Screen.CharacterDetails, { character })
  }

  const renderItem = ({ item: character }: { item: Character }) => {
    return (
      <Pressable key={character.name} onPress={() => navigateToCharacterDetails(character)}>
        <CharacterItem character={character} />
      </Pressable>
    )
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Characters
