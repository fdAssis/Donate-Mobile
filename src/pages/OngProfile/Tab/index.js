import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import FabButton from '../../../Components/FabButton';
import Home from '../../HomeScreen';

function User() {
  return (
    <View style={styles.container}>
      <Text>User!</Text>
    </View>
  );
}

function Wallet() {
  return (
    <View style={styles.container}>
      <FabButton
        style={{
          bottom: 100,
          right: 60,
        }}
      />
    </View>
  );
}

function Map() {
  return (
    <View style={styles.container}>
      <Text>Map!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Wallet':
              iconName = 'wallet';
              break;
            case 'Map':
              iconName = 'map-marked-alt';
              break;
            case 'User':
              iconName = 'user-circle';
              break;
            default:
              iconName = 'circle';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#9C27B0',
        inactiveTintColor: '#777',
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#9C27B0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  }
});