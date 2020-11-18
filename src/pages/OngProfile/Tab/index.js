import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SolidarityCampaigns from './screens/solidarityCampaings';
import AboutOng from './screens/aboutOng';
import SolidarityActions from './screens/solidarityAction';

const Tab = createMaterialTopTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#9FB3D2',
        style: { //Adição do style
          backgroundColor: '#FFFFFF', // Aplicando a cor ao background
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#1A54F8',
          borderBottomWidth: 5,
        },
      }}>

      {/* Tela campanhas solidarias da ong*/}
      <Tab.Screen 
        name="solidarity" 
        component={SolidarityCampaigns} 
        options={{tabBarLabel:"Campanhas"}}
      />

      {/* Tela acoes solidarias da ong*/}
      <Tab.Screen 
        name="actions" 
        component={SolidarityActions} 
        options={{tabBarLabel:"Ações"}} 
      />

      {/* Tela detalhes sobre a ong*/}
      <Tab.Screen 
        name="about" 
        component={AboutOng} 
        options={{tabBarLabel:"Sobre"}}
      />

    </Tab.Navigator>
  );
}

export default TabNavigator;
