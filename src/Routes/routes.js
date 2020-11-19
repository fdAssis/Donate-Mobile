import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const { Navigator, Screen } = createStackNavigator();

import HomeScreen from '../Pages/OngProfile/Drawer';
import OngMap from '../Pages/OngsMap';


export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false}}>

      {/*
      <Screen
        name="SelectMapPosition"
        component={SelectMapPosition}
        options={{
          headerShown: true,
          header: () => <Header showCancel={false} title="Selecionar Posisao" />
        }}
      />
      */}
      
        <Screen
          name         = "OngMap"
          component    = {OngMap}
        />

        <Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />

      </Navigator>
    </NavigationContainer>
  );
}