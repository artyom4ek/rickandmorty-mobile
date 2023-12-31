import React, { Fragment } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

import { Colors } from '../utils/colors'

import { Character } from '../models'

import InfoItem from '../components/InfoItem'
import ScreenHeadText from '../components/ScreenHeadText'
import SectionText from '../components/SectionText'

type ParamList = {
  CharacterParams: { character: Character }
}

const CharacterDetails = () => {
  const route = useRoute<RouteProp<ParamList, 'CharacterParams'>>()
  const { character } = route.params

  const infoToShow = [
    { label: 'Species', value: character?.species, icon: 'paw', id: '1' },
    { label: 'Gender', value: character?.gender, icon: 'user', id: '2' },
    { label: 'Status', value: character?.status, icon: 'heartbeat', id: '3' },
    { label: 'Location', value: character?.location.name, icon: 'map', id: '4' },
    {
      label: 'Origin',
      value: character?.origin.name,
      icon: 'location-arrow',
      id: '5'
    }
  ]
  return (
    <Fragment>
      <ScreenHeadText>{character?.name}</ScreenHeadText>
      <ScrollView>
        <View style={styles.container}>
          <Image source={{ uri: character?.image }} style={styles.image} />
        </View>
        <SectionText>Info</SectionText>
        {infoToShow.map(info => (
          <InfoItem key={info.label} iconName={info.icon} label={info.label} value={info.value} />
        ))}
      </ScrollView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.secondaryBackground
  },
  name: {
    fontSize: 20,
    padding: 10
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 25,
    margin: 15
  }
})

export default CharacterDetails
