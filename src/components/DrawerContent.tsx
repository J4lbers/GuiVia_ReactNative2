// src/components/DrawerContent.tsx
import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

export default function DrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('Profile')}
      />
{/* <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}> */}
    </DrawerContentScrollView>
  );
}
