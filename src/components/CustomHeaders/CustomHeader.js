import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons"

export default function CustomHeader({ title, isHome, navigation }) {
  return (
    <View style={{ flexDirection: "row", height: 50, }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {
          isHome ?
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
            >
              <Feather name="menu" size={30} color="#15b6d6" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            :
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: "center" }}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={24} color="#15b6d6" style={{ marginLeft: 10 }} />
              <Text>Back</Text>
            </TouchableOpacity>
        }
      </View>

      {/* Center */}
      <View style={{ flex: 1.5, justifyContent: 'center' }}>
        <Text style={{ textAlign: "center", }}>{title}</Text>
      </View>

      {/* Right */}
      <View style={{ flex: 1 }}>

      </View>

    </View>
  )
}