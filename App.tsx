
import React from 'react'
import { DrawerNavigator } from './navigation/DrawerNavigator';

// #1 Importamos el -react-native-gesture-handler-
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      {/* Llamado del DrawerNavigator */}
      <DrawerNavigator />
    </NavigationContainer>
    
  )
}
