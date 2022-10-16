import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const AboutAppPage = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Acerca de la app</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'aqua',
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    title: {
      fontSize: 25,
      color: 'black',
    }
});