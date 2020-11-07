import React from 'react';
import {ScrollView, StyleSheet } from 'react-native';

import CardSolidarityCampaings from '../../../components/CardSolidarityCampaings';

export default function SolidarityCampaings() {
  return (
    <ScrollView style={styles.container}>
     <CardSolidarityCampaings />
     <CardSolidarityCampaings />
     <CardSolidarityCampaings />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36',
  }
})