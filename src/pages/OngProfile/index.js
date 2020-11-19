import * as React from 'react';

import TabNavigator from './Tab';


import { StyleSheet, Text, View, ScrollView, Image, Platform, StatusBar} from 'react-native'
import Animated from 'react-native-reanimated'
const images = [
{ id: 1, uri : "https://r1.ilikewallpaper.net/iphone-wallpapers/download/78957/red-and-blue-wallpaper-iphone-wallpaper-ilikewallpaper_com.jpg"},
{ id: 2, uri : "https://picjumbo.com/wp-content/uploads/PANO0001-2-Pano-1080x1548.jpg"},
{ id: 3, uri : "https://r1.ilikewallpaper.net/iphone-wallpapers/download/78957/red-and-blue-wallpaper-iphone-wallpaper-ilikewallpaper_com.jpg"},
{ id: 4, uri : "https://picjumbo.com/wp-content/uploads/PANO0001-2-Pano-1080x1548.jpg"},
];

const img = "https://www.defensoria.ba.def.br/wp-content/uploads/2018/01/banner-central.jpg";

const HEADER_HEIGHT = Platform.OS == 'ios'?115:70+StatusBar.currentHeight;

const HEADER_MAX_HEIGHT = 20;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;

export default function ProfileOng() {
  const scrollY = new Animated.Value(0);
  const diffClantScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const headerY = Animated.interpolate(diffClantScrollY, {
    inputRange:[0, HEADER_HEIGHT],
    outputRange:[0, -HEADER_HEIGHT]
  })
  return (
  <View style={{flex:1}}>
    <Animated.View style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: HEADER_HEIGHT,
        backgroundColor: 'gray',
        zIndex: 1000,
        elevation: 1000,
        transform:[{translateY:headerY}],
        padding: 45,
      }}>

    <View style={{
      height: PROFILE_IMAGE_MAX_HEIGHT,
      width: PROFILE_IMAGE_MAX_HEIGHT,
      borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
      borderColor: '#0B9B87',
      borderWidth: 3,
      overflow: 'hidden',
    }}>
      <Image
        source={{ uri: img }}
        style={{ flex: 1, width: null, height: null }}
      />
    </View>
    </Animated.View>

    <TabNavigator />
  
  </View>
  )
}