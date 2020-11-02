import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Feather } from "@expo/vector-icons"


export default function CustomDrawerContent(props) {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#fff' }}
    >
      <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
        <Feather name="user" size={45} color="#15b6d6" style={{ marginLeft: 10 }} />
      </View>
      <ScrollView
        style={{ marginLeft: 5 }}
      >

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate('MenuTab')}
        >
          <Text>Menu Tab</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate('Notifications')}
        >
          <Text>Notifications</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}