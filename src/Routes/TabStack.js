import React from 'react';

import { 
  createMaterialTopTabNavigator 
} from '@react-navigation/material-top-tabs';

//Pages
import OngDetails from '../pages/OngDetails';
import OngData from '../pages/OngData';

const Tab = createMaterialTopTabNavigator();


const TabStack = () => {
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="OngData"
        component={OngData}
        options={{
          tabBarLabel: 'Ong Data',
        }}  />
      <Tab.Screen
        name="OngDetails"
        component={OngDetails}
        options={{
          tabBarLabel: 'Ong Details',
        }} />
    </Tab.Navigator>
  );
}

export default TabStack;