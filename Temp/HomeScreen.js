import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

import CustomHeader from '../src/components/CustomHeaders/CustomHeader';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Text>Home!</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('HomeDetail')}

        >
          <Text>Go to Home Details</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}