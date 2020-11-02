import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import CustomHeader from '../../src/components/CustomHeaders/CustomHeader';


export default function HomeScreenDetails({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home Details" navigation={navigation} />
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Text>Home details!</Text>
      </View>
    </SafeAreaView>
  );
}