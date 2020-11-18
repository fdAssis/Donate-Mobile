import React from 'react';
import {ScrollView} from 'react-native';

import CardSolidayCampaings from  '../../../../Components/CardSolidarityCampaings';

const SolidarityCampaings = () => {

  return(
    <ScrollView style={{flex:1, backgroundColor: '#FFFFFF'}}>
      <CardSolidayCampaings />
      <CardSolidayCampaings />
    </ScrollView>
  );

};

export default SolidarityCampaings;