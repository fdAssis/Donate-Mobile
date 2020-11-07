import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

import CustomHeader from '../../src/components/CustomHeaders/CustomHeader';

export default function SettingsScreenDetails({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Setting Details" navigation={navigation} />
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Text>Setting Details!</Text>
      </View>
    </SafeAreaView>
  );
}