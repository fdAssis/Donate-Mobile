import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../../Components/CustomHeaders/CustomDrawerContent';

import TabNavigator from '../Tab';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      drawerContent={props => CustomDrawerContent(props)}
    >      
      <Drawer.Screen 
        name="MenuTab" 
        component={TabNavigator} 
      />

    </Drawer.Navigator>
  )
}

export default DrawerNavigator;
