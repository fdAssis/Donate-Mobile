import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

import CustomHeader from '../../src/components/CustomHeaders/CustomHeader';

export default function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Setting" isHome={true} navigation={navigation} />
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Text>Setting!</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}

        >
          <Text>Go to Setting Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}