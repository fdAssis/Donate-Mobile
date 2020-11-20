import * as React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

// Constantes 
const HEADER_MAX_HEIGHT = 180;

const images = [
  { id: 1, uri: "https://r1.ilikewallpaper.net/iphone-wallpapers/download/78957/red-and-blue-wallpaper-iphone-wallpaper-ilikewallpaper_com.jpg" },
  { id: 2, uri: "https://picjumbo.com/wp-content/uploads/PANO0001-2-Pano-1080x1548.jpg" },
  { id: 3, uri: "https://r1.ilikewallpaper.net/iphone-wallpapers/download/78957/red-and-blue-wallpaper-iphone-wallpaper-ilikewallpaper_com.jpg" },
  { id: 4, uri: "https://picjumbo.com/wp-content/uploads/PANO0001-2-Pano-1080x1548.jpg" },
];


const dataItems = [
  { id: 1, text: 'one' },
  { id: 2, text: 'one' },
  { id: 3, text: 'one' },
  { id: 4, text: 'one' },
  { id: 5, text: 'one' },
];

const img = "https://www.defensoria.ba.def.br/wp-content/uploads/2018/01/banner-central.jpg";

const scrollY = new Animated.Value(0);
const diffClantScrollY = Animated.diffClamp(scrollY, 0, HEADER_MAX_HEIGHT);
const headerY = Animated.interpolate(diffClantScrollY, {
  inputRange: [0, HEADER_MAX_HEIGHT],
  outputRange: [0, -HEADER_MAX_HEIGHT]
})

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={
        { 
          width: 100, 
          height: 100, 
          backgroundColor: 'yellow',
          margin: 10, 
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }
        }>
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
};

const MySearchBar = () => (

  <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
    <Animated.View style={
      [styles.header,
      {
        height: HEADER_MAX_HEIGHT,
        transform: [{ translateY: headerY }]
      }
      ]}>
      <Text style={styles.headerText}>
        Seja voce a ajuda de alguém.
    </Text>

      <View>
        <TextInput style={styles.headerSearch} placeholder='Busque por uma ONG...' />
        <RectButton style={styles.headerButton} onPress={() => { }}>
          <Icon name="search" size={20} color="#1A54F8" />
        </RectButton>
      </View>
    </Animated.View>

    <View style={styles.category}>
      <View>
        <FlatList
          horizontal
          data={dataItems}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    </View>

    <Animated.ScrollView
      bounces={false}
      scrollEventThrottle={16}
      style={{ paddingTop: HEADER_MAX_HEIGHT }}
      onScroll={Animated.event([
        {
          nativeEvent: { contentOffset: { y: scrollY } }
        }
      ])}
    >
      {
        images.map(image => (
          <View key={image.id} style={{ height: 400, margin: 20 }}>
            <Image
              source={{ uri: image.uri }}
              style={{ flex: 1, height: null, width: null, borderRadius: 10 }}
            />
          </View>
        ))
      }
    </Animated.ScrollView>

  </View>
);

export default MySearchBar;