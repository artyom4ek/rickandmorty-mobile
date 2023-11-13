/**
 * @format
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';

const App = () => {
  return <Text style={styles.sectionTitle}>Rick And Morty app</Text>;
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
