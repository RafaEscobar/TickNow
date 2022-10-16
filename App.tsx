
import React from 'react'
import { View } from 'react-native';
import { DrawerNavigator } from './navigation/DrawerNavigator';

// #1 Importamos el -react-native-gesture-handler-
import 'react-native-gesture-handler';

export const App = () => {
  return (
    <View>
      {/* Llamado del DrawerNavigator */}
      <DrawerNavigator />
    </View>
  )
}
