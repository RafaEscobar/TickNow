import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

export const HabitsScreen = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Hábitos...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'white',
  }
});
