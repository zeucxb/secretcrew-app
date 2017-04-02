import Expo from 'expo';
import React from 'react';
import SecrectCrew from './src/Index';

class App extends React.Component {
  render() {
    return (
      <SecrectCrew />
    );
  }
}


Expo.registerRootComponent(App);
