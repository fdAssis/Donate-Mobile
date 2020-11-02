import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons"

export const BANNER_H = 350;
export const TOPNAVI_H = 50;

export default function TopNavigation ({ navigation, title, scrollA, showCancel }) {
  const safeArea = useSafeAreaInsets();

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container(safeArea)}>
        <View style={styles.menu}>
           <BorderlessButton
              onPress={() => navigation.openDrawer()}
            >
              <Feather name="menu" size={30} color="#15b6d6" style={{ marginLeft: 10 }} />
            </BorderlessButton>

          <Text style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: '#0f0',}}
            >
            {title}
          </Text>

          {
            showCancel ? 
            (
              <BorderlessButton  onPress={() => navigation.openDrawer()}>
                <Feather name="map-pin" size={24} color="#0B9B87" />
              </BorderlessButton>
            ) : 
            (<View />)}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: (safeArea) => ({
    paddingTop: safeArea.top,
    marginBottom: 0,
    height: TOPNAVI_H + safeArea.top,
    justifyContent: 'center',
    shadowOffset: { y: 0 },
    backgroundColor:  '#FFF',
    shadowOpacity:  0.5,
    elevation:  5,
    zIndex: 100,
  }),

  menu: ({
    padding: 24,
    paddingTop: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
});
