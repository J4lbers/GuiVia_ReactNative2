import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ruta_1A from '../screens/Ruta_1A';
import Ruta_2 from '../screens/Ruta_2';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: '#f5f5f5' },
        drawerActiveTintColor: '#2196f3',
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Ruta1A" component={Ruta_1A} />
      <Drawer.Screen name="Ruta2" component={Ruta_2} />
    </Drawer.Navigator>
  );
}