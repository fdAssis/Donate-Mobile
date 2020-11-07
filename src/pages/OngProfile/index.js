import React, {useRef} from 'react';
import {View, ScrollView, Image, Animated} from 'react-native';

import TopNavegation from '../../components/OngProfileTopNavegation/topNavegation';

export const BANNER_H = 250;
export const TOPNAVI_H = 50;

import RoutesProfile from '../../Routes/TabStack';
import DrawerRoutes from '../../Routes/DrawerNavegation';

const img = "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png";

const OngProfile = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <TopNavegation title="Projeto Acolher" scrollA={scrollA} showCancel={true}/>
      <Animated.ScrollView
        onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
      >
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={{uri:img}}
          />
        </View>
        <RoutesProfile />
      </Animated.ScrollView>
    </View>
  );
};

const styles = {
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
};

export default OngProfile;