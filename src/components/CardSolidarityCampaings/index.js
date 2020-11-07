
import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'

import { Divider } from 'react-native-elements'
import { Feather, FontAwesome } from '@expo/vector-icons';


import { RectButton,  } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const img = "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png";

const CardSolidarityCampaing = () => {

  return (
    <View style={styles.listItem}>
      <Image
        source={{ uri: img }}
        style={styles.image}
      />

      <LinearGradient
        // Button Linear Gradient
        colors={['#8BC6EC', '#9599E2', '#9599E2']}
        style={styles.kindCampaing}>
        <Text
          style={{
            backgroundColor: 'transparent',
            fontSize: 18,
            color: '#FFFFFF',
          }}>
          Doacao de alimentos
        </Text>
      </LinearGradient>


      <View style={styles.info}>
        <Text style={styles.nameCampaing}> Ajude um progrador </Text>

        <Text style={styles.texInfo}>
          O "Fundo Colaborativo Enfrente" é composto por diversos parceiros,
          possibilitando que a cada um real doado, o valor seja triplicado...
        </Text>
        
        <Text style={styles.locateCampaing}> 
          <Feather name="map-pin" size={24} color="#2AB5D1" />
           Av. Castelo Branco, Caxias - MA, Brasil
        </Text>
        
        <Text style={styles.dataCampaing}>
          <Feather name="calendar" size={24} color="#2AB5D1" />
          03-10-2020 - 04-11-2020
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <View >
            <Text style={styles.campaingInfo}>Informações</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View style={styles.campaingLink}>
          <Feather name="link" size={25} color="#FFFFFF" />
        </View>
        </TouchableOpacity>
      </View>
      

    </View>
  )

};

const styles = StyleSheet.create({
  listItem: {
    marginTop: 10,
    //padding      : 10,
    backgroundColor: "#ffffff",
    width: '90%',
    height: 600,
    alignSelf: "center",
    alignContent:'space-between',
    flexDirection: "row",
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderRadius: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius:20,
  },

  image: {
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    
  },

  kindCampaing: {
    height: 50,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    position: 'absolute',
    marginTop: 250,
  },

  info: {
    marginBottom: 30,
    alignItems: 'center',
    alignContent: 'space-between',
    justifyContent: 'center',
  },

  nameCampaing: {
    color: "#272343",
    fontSize: 30,
    fontWeight: "bold",
  },

  texInfo: {
    color: "#000",
    marginTop: 10,
    marginBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
  },

  locateCampaing: {
    color: "#272343",
    fontSize: 18,
    padding: 2,
    marginBottom: 10,
    marginTop: 10,
  },

  dataCampaing: {
    color: "#272343",
    fontSize: 18,
  },

  footer:{
    width: '100%',
    height: '10%',
    backgroundColor:'#9599E2',
    justifyContent: 'space-between',
    flexWrap: 'wrap', 
    flexDirection:'row',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius:20,
  },

  campaingInfo: {
    color: '#FFF',
    fontSize: 25,
    marginTop: 10,
    marginLeft: 10,
  },

  campaingLink: {
    backgroundColor: '#8BC6EC',
    height: '100%',
    width: 70,
    justifyContent: 'center',
    borderBottomRightRadius: 20,
    paddingLeft: 20,
  }

});

export default CardSolidarityCampaing;