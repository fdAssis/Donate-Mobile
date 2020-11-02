import React, {useRef} from 'react';
import {View, Animated} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import CustomDrawerContent from '../../components/CustomHeaders/CustomDrawerContent';
import CustomHeader from '../../components/OngProfileTopNavegation/topNavegation'

export const BANNER_H = 250;
export const TOPNAVI_H = 50;

const img = "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png";

import SolidarityCampaigns from './Tab/solidarityCampaings';
import AboutOng from './Tab/aboutOng';
import SolidarityActions from './Tab/solidarityAction';

const Tab = createMaterialTopTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="solidarity" component={SolidarityCampaigns} />
      <Tab.Screen name="actions" component={SolidarityActions} />
      <Tab.Screen name="about" component={AboutOng}/>
    </Tab.Navigator>
  );
}

function HomeScreen ({navigation}) {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <CustomHeader 
        navigation={navigation} 
        title="Ong name"
        showCancel={true}
      />

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
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '200%',
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