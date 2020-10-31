import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Pages
import OngDetails from '../pages/OngDetails';
import OngData from '../pages/OngData';

const Drawer = createDrawerNavigator();

const TabStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#F8f8',
        style: {
          backgroundColor: '#FFF',
          borderColor: "#ffee33"
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}>
      <Drawer.Screen
        name="OngData"
        component={OngData}
        options={{
          tabBarLabel: 'Ong Data',
        }}  />
      <Drawer.Screen
        name="OngDetails"
        component={OngDetails}
        options={{
          tabBarLabel: 'Ong Details',
        }} />
    </Drawer.Navigator>
  );
}

export default TabStack;