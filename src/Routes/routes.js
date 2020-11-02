import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const { Navigator, Screen } = createStackNavigator();

import OngProfile from '../pages/OngProfile/index';
import OngMap from '../pages/OngsMap';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>

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
          name="OngMap"
          component={OngMap}
        />

        <Screen
          name="OngProfile"
          component={OngProfile}
        />

      </Navigator>
    </NavigationContainer>
  );
}