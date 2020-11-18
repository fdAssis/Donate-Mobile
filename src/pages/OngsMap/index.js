import React from 'react';

import { Text, View } from 'react-native';
import Svg, { Circle, Image as ImageSvg, Defs, ClipPath } from 'react-native-svg';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import styles from './styles/style';
import { mapStyle } from './styles/darkMapTheme';


const img = "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png";

const OngMap = () => {

  const navigation = useNavigation();

  function handleNavigateToOngProfile() {
    navigation.navigate('OngProfile');
  }

  /*
  const handleSelectMap = () => {
    navigation.navigate('SelectMapPosition');
  }
  */

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: -5.021113,
          longitude: -44.266861,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034
        }}
      >
        <Marker
          coordinate={{
            latitude: -5.021113,
            longitude: -44.266861,
          }}
        >
          <Svg height="100" width="100">
            <Defs>
              <ClipPath id="clip">
                <Circle cx="50%" cy="50%" r="40%" />
              </ClipPath>
            </Defs>
            <ImageSvg
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              href={{ uri: img }}
              clipPath="url(#clip)"
            />
          </Svg>

          <Callout tooltip onPress={handleNavigateToOngProfile}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Projeto Acolher</Text>
            </View>
          </Callout>
        </Marker>

      </MapView>
      <View style={styles.footer}>
        <TextInput style={styles.footerText}>
          
        </TextInput>

        <RectButton style={styles.createOrphanageButton} onPress={() => {}}>
          <Feather name="search" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
}

export default OngMap;