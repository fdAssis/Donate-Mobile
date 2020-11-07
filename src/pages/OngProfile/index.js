import React, {useRef} from 'react';
import {View, Animated} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import CustomDrawerContent from '../../components/CustomHeaders/CustomDrawerContent';
import CustomHeader from '../../components/OngProfileTopNavegation/topNavegation'

export const BANNER_H = 250;
export const TOPNAVI_H = 50;

const img = "https://www.defensoria.ba.def.br/wp-content/uploads/2018/01/banner-central.jpg";

import SolidarityCampaigns from './Tab/solidarityCampaings';
import AboutOng from './Tab/aboutOng';
import SolidarityActions from './Tab/solidarityAction';

const Tab = createMaterialTopTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
    initialRouteName="solidarity"
      tabBarOptions={{
        activeTintColor: '#f8f8f2',
        inactiveTintColor: '#6272a4',
        style: { //Adição do style
          backgroundColor: '#44475a', // Aplicando a cor ao background
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#f8f8f2',
          borderBottomWidth: 5,
        },
      }}>
      <Tab.Screen name="solidarity" component={SolidarityCampaigns} options={{tabBarLabel:"Campanhas"}}/>
      <Tab.Screen name="actions" component={SolidarityActions} options={{tabBarLabel:"Ações"}} />
      <Tab.Screen name="about" component={AboutOng} options={{tabBarLabel:"Sobre"}}/>
    </Tab.Navigator>
  );
}

function HomeScreen ({navigation}) {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <CustomHeader title="Projeto Acolher" scrollA={scrollA} showCancel={true} navigation={navigation}/>
      <Animated.ScrollView
        onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
      >
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={{uri:img}}
          />
        </View>
        <TabNavigator />
      </Animated.ScrollView>
    </View>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeSceen"
      drawerContent={props => CustomDrawerContent(props)}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
    </Drawer.Navigator>
  )
}

const navOptionHandle = () => ({
  headerShown: false
});

const StackApp = createStackNavigator();

const OngProfile = () => {
  return (
    <StackApp.Navigator initialRouteName="HomeApp">
      <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandle} />
    </StackApp.Navigator>
  );
};

const styles = {
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#282a36',
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '150%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
};

export default OngProfile;