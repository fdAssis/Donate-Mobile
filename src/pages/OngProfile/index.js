import * as React from 'react';
import { Animated, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import { StackNavigationProp } from '@react-navigation/stack';
import {
  useCollapsibleSubHeader,
  CollapsibleSubHeaderAnimator,
} from 'react-navigation-collapsible';
import TabNavigator from './Tab';

// Constantes 
const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;

const createRow = (onPress) => ({ item }) => (

  <TouchableOpacity
    onPress={onPress}
    style={{
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    }}>
    <Text
      style={{
        fontSize: 22,
      }}>
      {item}
    </Text>
  </TouchableOpacity>
);

//import { StackParamList } from '../App';

const data = [];
for (let i = 0; i < 100; i++) {
  data.push(i);
}

const img = "https://www.defensoria.ba.def.br/wp-content/uploads/2018/01/banner-central.jpg";


const MySearchBar = () => (
  <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
    <View style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: HEADER_MAX_HEIGHT,
    }}>
      <Image
        source={{ uri: img }}
        style={{ flex: 1, width: null, height: null }}
      />
    </View>

    {/** Foto de perfil da ong */}
    <View style={{
      height: PROFILE_IMAGE_MAX_HEIGHT,
      width: PROFILE_IMAGE_MAX_HEIGHT,
      borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
      borderColor: '#0B9B87',
      borderWidth: 3,
      overflow: 'hidden',
      marginTop: HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2),
      marginLeft: 10,
    }}>
      <Image
        source={{ uri: img }}
        style={{ flex: 1, width: null, height: null }}
      />
    </View>

    {/** Nome da ong */}
    <View>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 10,
        paddingBottom: 10,
      }}>
        Projeto acolher
        </Text>
    </View>

  </View>
);

const SubHeaderScreen = ({ navigation }) => {
  const {
    onScroll,
    containerPaddingTop,
    scrollIndicatorInsetTop,
    translateY,
  } = useCollapsibleSubHeader();

  return (
    <>
      <Animated.View
        onScroll={onScroll}
        contentContainerStyle={{ paddingTop: containerPaddingTop }}
        scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
        style={{
          borderWidth: 3,
          borderColor: 'red',
        }}
      >
        <View style={{ flex: 1 }}>
          <TabNavigator />
        </View>
      </Animated.View>

      <CollapsibleSubHeaderAnimator translateY={translateY}>
        <MySearchBar />
      </CollapsibleSubHeaderAnimator>
    </>
  );
};

export default SubHeaderScreen;