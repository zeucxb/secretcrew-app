import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
  },
});

type Props = {
  style: Object,
  children: React.Element,
}

export default ({ style, children }: Props) => (
  <View style={[styles.containerStyle, style]}>
    {children}
  </View>
);

