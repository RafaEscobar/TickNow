import React from 'react'
import { View } from 'react-native'

// #1 Agregamos la importación de -createBottomTabNavigator-
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// #2 Importamos todas nuestras Screens
import { ProyectsScreen } from '../src/screens/ProyectsScreen';
import { HabitsScreen } from '../src/screens/HabitsScreen';
import { TasksScreen } from '../src/screens/TasksScreen';
import { PointsScreen } from '../src/screens/PointsScreen';

// #3 Importamos el lugar de extracción de los iconos
import Icon from 'react-native-vector-icons/Ionicons';

// #4 Creamos la constante receptora de -createBottomTabNavigator-
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    // #5 Abrimos el Tab.Navigator
    <Tab.Navigator

      screenOptions={ ({ route }) => ({

        // #6 Se genera la pripiedad tabBarIcon con una arrowFunction
        tabBarIcon: ({ focused, color, size }) => {
          // #7 Se crea variable que alamcena el nombre del Icono en cuestion
          let nameIcon='';

          // #8 Generamos un switch que, en base al nombre rescatado de la screen, establece un nombre de icono u otro
          switch(route.name){
            case 'Proyectos':
              nameIcon = focused ? 'create' : 'create-outline';
            break;
            case 'Habitos':
              nameIcon = focused ? 'trophy' : 'trophy-outline';
            break;
            case 'Tareas':
              nameIcon = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
            break;
            case 'Productividad':
              nameIcon = focused ? 'podium' : 'podium-outline';
            break;
          }
          return <Icon name={ nameIcon } color={ color } size={ size } />
        }
      })}
    
    >
      {/* #9 Generamos las Screens */}
        {/* Screen Proyectos */}
      <Tab.Screen 
        name='Proyectos' 
        component={ ProyectsScreen }
        options={{ tabBarLabel: 'Proyectos' }} 
      />
        {/* Screen Habitos */}
      <Tab.Screen 
        name='Habitos' 
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
