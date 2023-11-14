/**
 * @format
 */

import React from 'react'
import { StyleSheet } from 'react-native'

import RootRoute from './routes/Root'

const App = () => {
  return <RootRoute />
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  }
})

export default App
