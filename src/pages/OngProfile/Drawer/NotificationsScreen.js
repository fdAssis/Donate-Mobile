import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

import CustomHeader from '../../../components/CustomHeaders/CustomHeader';


export default function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Notofication" navigation={navigation} />
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Text>Notification!</Text>
      </View>
    </SafeAreaView>
  );
}
