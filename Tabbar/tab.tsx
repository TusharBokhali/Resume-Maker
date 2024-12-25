import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import { NavigationContainer } from '@react-navigation/native';

export default function tab() {
    const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
    </Tab.Navigator>
    </NavigationContainer>
  )
}