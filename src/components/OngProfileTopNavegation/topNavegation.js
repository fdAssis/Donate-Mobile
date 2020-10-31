import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from "@expo/vector-icons"

export const BANNER_H = 350;
export const TOPNAVI_H = 50;

const TopNavigation = props => {
  const navigation = useNavigation();
  const safeArea = useSafeAreaInsets();

  const { title, scrollA, showCancel} = props;
  const isFloating = !!scrollA;
  const [isTransparent, setTransparent] = useState(isFloating);

  function handleBackToMapPage(){
    navigation.navigate('OngData')
  }

  useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener(a => {
      const topNaviOffset = BANNER_H - TOPNAVI_H - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollA.removeListener(listenerId);
  });

  return (
    <>
      <StatusBar
        barStyle={isTransparent ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container(safeArea, isFloating, isTransparent)}>
        <View style={styles.menu}>
          <BorderlessButton  onPress={handleBackToMapPage}>
            <Feather name="menu" size={24} color="#15b6d6" />
          </BorderlessButton>

          <Text style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: isTransparent ? '#FFF' : '#000',}}
            >
            {title}
          </Text>

          {showCancel ? (
            <BorderlessButton  onPress={navigation.goBack}>
              <Feather name="map" size={24} color="#0B9B87" />
            </BorderlessButton>
          ) : (<View />)}
        </View>
      </View>
    </>
  );
};

const styles = {
  container: (safeArea, isFloating, isTransparent) => ({
    paddingTop: safeArea.top,
    marginBottom: isFloating ? -TOPNAVI_H - safeArea.top : 0,
    height: TOPNAVI_H + safeArea.top,
    justifyContent: 'center',
    shadowOffset: { y: 0 },
    backgroundColor: isTransparent ? '#0001' : '#FFF',
    shadowOpacity: isTransparent ? 0 : 0.5,
    elevation: isTransparent ? 0.01 : 5,
    zIndex: 100,

  }),

  title: isTransparent => ({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: isTransparent ? '#FFF' : '#000',
  }),

  menu: ({
    padding: 24,
    paddingTop: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
};

export default TopNavigation;