import React from 'react';
import { Image, Text, Animated, StyleSheet, Dimensions } from 'react-native';
import { logo } from '../images/Index';

import RowView from './views/RowView';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignSelf: 'center',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: Dimensions.get('window').width >= 375 ? 80 : 70,
    height: Dimensions.get('window').width >= 375 ? 80 : 50,
  },
  text: {
    fontSize: 22,
    color: '#FAFAFA',
  },
});

type Props = {
  style: Object,
  secondary: Boolean,
};

export default ({ style, secondary = false }: Props) => (
  <RowView style={[styles.container, style]}>
    <Image
      source={secondary ? logo.secondary : logo.primary}
      resizeMode="contain"
      style={styles.logo}
    />
    <Animated.View style={{ flexDirection: 'row' }}>
      <Text style={styles.text}>Secret</Text>
      <Text style={[styles.text, { paddingLeft: 5, color: '#673AB7' }]}>Crew</Text>
    </Animated.View>
  </RowView>
);
