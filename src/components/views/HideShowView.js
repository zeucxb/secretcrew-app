import React from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },
});


type Props = {
  children: React.Element,
  height: number,
  visible: boolean,
  showDuration: number,
  style: Object,
  hideDuration: number,
};

let animatedValue = new Animated.Value(0);

export default ({ children, height = 56, hideDuration = 100,
showDuration = 200, style, visible, ...props }: Props) => {
  animatedValue = new Animated.Value(visible ? height : 0);

  if (visible) {
    Animated.timing(animatedValue, {
      toValue: height,
      duration: showDuration,
      easing: Easing.out(Easing.ease),
    }).start();
  } else {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: hideDuration,
      easing: Easing.in(Easing.ease),
    }).start();
  }
  return (
    <View
      style={[styles.container, style]}
      pointerEvents="box-none"
    >
      <Animated.View
        style={{ flex: 1, height: animatedValue }}
        {...props}
      >{children}</Animated.View>
    </View>
  );
};
