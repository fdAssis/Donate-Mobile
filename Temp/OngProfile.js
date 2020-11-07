import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import CustomDrawerContent from '../src/components/CustomHeaders/CustomDrawerContent'

import HomeScreen from './Temp/tab/HomeScreen';
import HomeScreenDetails from './Temp/tab/HomeScreenDetail';
import SettingsScreen from './Temp/tab/SettingScreen';
import SettingsScreenDetails from './Temp/tab/SettingScreenDetail';

import NotificationsScreen from './Temp/drawer/NotificationsScreen';

import RegisterScreen from './auth/RegisterScreen';
import LoginScreen from './auth/LoginScreen'


const navOptionHandle = () => ({
  headerShown: false
});

const StackHome = createStackNavigator();
function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandle} />
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetails} options={navOptionHandle} />
    </StackHome.Navigator>
  )
}

const StackSetting = createStackNavigator();
function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Settings" component={SettingsScreen} options={navOptionHandle} />
      <StackSetting.Screen name="SettingsDetail " component={SettingsScreenDetails} options={navOptionHandle} />
    </StackSetting.Navigator>
  )
}

const Tab = createMaterialTopTabNavigator();
function TabNavifator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      drawerContent={props => CustomDrawerContent(props)}
    >
      <Drawer.Screen name="MenuTab" component={TabNavifator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator();
export default function App() {
  return (
    <StackApp.Navigator initialRouteName="Login">
      <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandle} />
      <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandle} />
      <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandle} />
    </StackApp.Navigator>
  );
}