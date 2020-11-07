import React from 'react';

import { Text, View } from 'react-native';
import Svg, { Circle, Image as ImageSvg, Defs, ClipPath } from 'react-native-svg';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import styles from './style';

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#282a36"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]

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