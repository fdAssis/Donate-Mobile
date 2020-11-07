import React from 'react';

import { 
  createMaterialTopTabNavigator 
} from '@react-navigation/material-top-tabs';

//Pages
import SolidarityCampaings from '../pages/OngProfile/Tab/solidarityCampaings';
import OngData from '../pages/OngData';

const Tab = createMaterialTopTabNavigator();


const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="SolidarityCampaings"
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#000',
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#1A54F8',
          borderBottomWidth: 5,
        },
      }}>
      <Tab.Screen
        name="SolidarityCampaings"
        component={SolidarityCampaings}
        options={{
          tabBarLabel: 'Campanhas',
        }}
      />

      <Tab.Screen
        name="OngData"
        component={OngData}
        options={{
          tabBarLabel: 'Ações',
        }}
      />
    </Tab.Navigator>
  );
}

export default TabStack;