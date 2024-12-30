/* eslint-disable jsx-quotes */
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Favourite from './Favourite';
import Setting from './Setting';

export default function Tabbar() {
  const Tab = createBottomTabNavigator();

  return (
  

    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favourite" component={Favourite} />
    <Tab.Screen name="Setting" component={Setting} />
  </Tab.Navigator>
  
  );
}
