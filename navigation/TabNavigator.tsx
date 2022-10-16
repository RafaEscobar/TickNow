import React from 'react'
import { View } from 'react-native'

// #1 Agregamos la importación de -createBottomTabNavigator-
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// #2 Importamos todas nuestras Screens
import { ProyectsScreen } from '../src/screens/ProyectsScreen';
import { HabitsScreen } from '../src/screens/HabitsScreen';
import { TasksScreen } from '../src/screens/TasksScreen';
import { PointsScreen } from '../src/screens/PointsScreen';

// #3 Creamos la constante receptora de -createBottomTabNavigator-
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    // #4 Abrimos el Tab.Navigator
    <Tab.Navigator>
      {/* #5 Generamos las Screens */}
        {/* Screen Proyectos */}
      <Tab.Screen 
        name='Proyectos' 
        component={ ProyectsScreen }
        options={{ tabBarLabel: 'Proyectos' }} 
      />
        {/* Screen Habitos */}
      <Tab.Screen 
        name='Hábitos' 
        component={ HabitsScreen } 
        options={{ tabBarLabel: 'Hábitos' }}
      />
        {/* Screen Tareas */}
      <Tab.Screen 
        name='Tareas' 
        component={ TasksScreen } 
        options={{ tabBarLabel: 'Tareas' }}
      />
        {/* Screen Puntos de productividad */}
      <Tab.Screen 
        name='Productividad' 
        component={ PointsScreen } 
        options={{ tabBarLabel: 'Productividad' }}
      />
    </Tab.Navigator>
  )
}
