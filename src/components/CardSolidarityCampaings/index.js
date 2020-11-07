import React from 'react';
import {StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const img = "https://www.jornaldosudoeste.com/wp-content/uploads/2018/11/Natal-2018-VITORIADACONQUISTA-300x300.jpg";

import donate from '../../../assets/donate.png';

const CardSolidarityCampaing = () => {

  return (
    <View style={styles.listItem}>
      <Image
        source={{ uri: img }}
        style={styles.image}
      />

      {/*
      <LinearGradient
        // Button Linear Gradient
        colors={['#f8f8f2', '#ffffff', '#f8f8f2']}
        style={styles.kindCampaing}>
        <Text
          style={{
            backgroundColor: 'transparent',
            fontSize: 18,
            color: '#282a36',
          }}>
          Doacao de alimentos
        </Text>
      </LinearGradient>
      */}


      <View style={styles.info}>
        <Text style={styles.nameCampaing}> Faz bem fazer bem </Text>

        <Text style={styles.texInfo}>
          O "Fundo Colaborativo Enfrente" é composto por diversos parceiros,
          possibilitando que a cada um real doado, o valor seja triplicado...
        </Text>
        
        <Text style={styles.locateCampaing}> 
          <Feather name="map-pin" size={24} color="#FFFFFF" />
           Av. Castelo Branco, Caxias - MA, Brasil
        </Text>
        
        <Text style={styles.dataCampaing}>
          <Feather name="calendar" size={24} color="#FFFFFF" />
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
          <Image 
            source={donate}
          />
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
    backgroundColor: "#6272a4",
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
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    
  },

  kindCampaing: {
    height: 50,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    position: 'absolute',
    marginTop: 270,
  },

  info: {
    marginBottom: 30,
    alignItems: 'center',
    alignContent: 'space-between',
    justifyContent: 'center',
  },

  nameCampaing: {
    color: "#f8f8f2",
    fontSize: 30,
    fontWeight: "bold",
  },

  texInfo: {
    color: "#f8f8f2",
    marginTop: 10,
    marginBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
  },

  locateCampaing: {
    color: "#bbbfca",
    fontSize: 18,
    padding: 2,
    marginBottom: 10,
    marginTop: 10,
  },

  dataCampaing: {
    color: "#bbbfca",
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