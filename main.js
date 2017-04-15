import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
        <Button block large><Text>Hi</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
