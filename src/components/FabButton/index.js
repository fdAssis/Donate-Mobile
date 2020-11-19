import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function FabButton(props) {
  const [open, setOpen] = useState(false)
  const [animation] = useState(new Animated.Value(0))

  const toggleMenu = () => {
    var toValue = open ? 0 : 1

    Animated.spring(animation, {
      toValue: toValue,
      friction: 5,
      useNativeDriver: false
    }).start()

    setOpen(!open)
  }

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "50deg"]
        })
      }
    ]
  }

  const homeStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -95]
        })
      }
    ]
  }

  const table = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -30]
        })
      }
    ]
  }

  const info_circle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 35]
        })
      }
    ]
  }

  const menuTab = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -200]
        })
      }
    ]
  }

  return (
    <View style={[styles.container, props.style]} >



      <TouchableWithoutFeedback onPress={() => alert('Home button')}>
        <Animated.View style={[styles.button, styles.subMenu, homeStyle]}>
          <Icon
            name="home"
            size={18}
            color="#393e46"
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => alert('Home heart')}>
        <Animated.View style={[styles.button, styles.subMenu, table]}>
          <Icon
            name="table"
            size={18}
            color="#393e46"
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => alert('Home heart')}>
        <Animated.View style={[styles.button, styles.subMenu, info_circle]}>
          <Icon
            name="info-circle"
            size={18}
            color="#393e46"
          />
        </Animated.View>
      </TouchableWithoutFeedback>


      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <Icon
            name="th-large"
            size={20}
            color="#FFFFFF"
          />
        </Animated.View>
      </TouchableWithoutFeedback>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',

  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menu: {
    backgroundColor: '#393e46',
  },

  subMenu: {
    width: 50,
    height: 50,
    borderRadius: 40 / 2,
  },

  menuTab: {
    position: 'absolute',
    width: 60,
    height: 250,
    //right: 0,
    borderRadius: 300 / 2,
    backgroundColor: '#393e46',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
