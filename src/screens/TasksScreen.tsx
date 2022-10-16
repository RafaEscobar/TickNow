import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TasksScreen = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Tareas...</Text>
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
