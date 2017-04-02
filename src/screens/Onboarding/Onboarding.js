import React from 'react';
import Swiper from 'react-native-swiper';
import Login from './Login';

export default class Onboarding extends React.PureComponent {
  render() {
    return (
      <Swiper>
        <Login />
      </Swiper>
    );
  }
}
