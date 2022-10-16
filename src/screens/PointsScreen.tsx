import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PointsScreen = () => {
  return (
    <View style={ styles.container }> 
      <Text style={ styles.title }>Puntos de productividad...</Text>
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