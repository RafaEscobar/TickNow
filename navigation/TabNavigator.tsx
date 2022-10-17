import React from 'react'

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
    // #6 Creanos el atributo screenOptions
    screenOptions={ ({ route }) => ({
      // #7 Se genera la pripiedad tabBarIcon con una arrowFunction
      tabBarIcon: ({ focused, color, size }) => {
        // #8 Se crea variable que alamcena el nombre del Icono en cuestion
        let nameIcon='';
        // #9 Generamos un switch que, en base al nombre rescatado de la screen, establece un nombre de icono u otro
        switch(route.name){
          case 'ProyectosTab':
            nameIcon= focused ? 'create' : 'create-outline';
          break;
          case 'Habitos':
            nameIcon= focused ? 'checkmark-circle' : 'checkmark-circle-outline';
          break;
          case 'Tareas':
            nameIcon= focused ? 'checkmark-circle' : 'checkmark-circle-outline';
          break;
          case 'Productividad':
            nameIcon= focused ? 'bar-chart' : 'bar-chart-outline';
          break;
        }
        return <Icon name={nameIcon} color={ color } size={ size } />
      }
    })}
    
    >
      {/* #10 Generamos las Screens */}
        {/* Screen Proyectos */}
      <Tab.Screen 
        name='ProyectosTab' 
        component={ ProyectsScreen } 
        options={{
          tabBarLabel: "Proyectos",
          
        }} 
      /> 
        {/* Screen Habitos */}
      <Tab.Screen 
        name='Habitos' 
        component={ HabitsScreen } 
        options={{
          tabBarLabel: 'Hábitos',
        }}
      />
        {/* Screen Tareas */}
      <Tab.Screen 
        name='Tareas' 
        component={ TasksScreen } 
        options={{
          tabBarLabel: 'Tareas',
        }}
      />
        {/* Screen Productividad */}
      <Tab.Screen 
        name='Productividad' 
        component={ PointsScreen } 
        options={{
          tabBarLabel: 'Productividad',
        }}
      />
    </Tab.Navigator>
  )
}
